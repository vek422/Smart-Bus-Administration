import Pass from "../models/Pass.js";
import User from "../models/User.js";
import { format, addDays } from "date-fns";
export const addUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      email,
      boardingPoint,
      pAddress,
      contactNumber,
      uid = "",
      age,
    } = req.body;

    const exists = await User.findOne({ uid: uid });
    if (exists) return res.status(400).json({ message: "UID already exist" });
    const newUser = new User({
      uid,
      personalInfo: {
        firstName,
        lastName,
        gender,
        age,
        email,
      },
      boardingPoint,
      pAddress,
      contactNumber,
    });
    const savedUser = await newUser.save();

    if (!savedUser)
      return res
        .status(400)
        .json({ message: "Unable To Process Request" })
        .end();
    return res.status(201).json({ savedUser }).end();
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Err At Server -> ${err}` })
      .end();
  }
};
export const getUserList = async (req, res) => {
  try {
    const users = await User.find().populate("passInfo");
    res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).json({ message: `Error at server -> ${err}` });
  }
};
export const getUserInfo = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid: uid }).populate("passInfo");
    if (!user)
      return res.status(404).json({ message: `${uid} User Not Found` });
    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: `Error at server -> ${err}` });
  }
};
export const renewPass = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid: uid }).populate("passInfo");
    if (!user) return res.status(404).json({ message: "User Not Found" });

    const currentDate = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(currentDate.getDate() + 7);

    if (user.passInfo.endDate > sevenDaysLater) {
      return res.status(400).json({
        message: "Cannot renew pass. More than 7 days left until expiration.",
      });
    }

    const newEndDate = new Date(user.passInfo.endDate);
    newEndDate.setDate(user.passInfo.endDate.getDate() + 30);

    const updatedPass = await Pass.updateOne(
      { _id: user.passInfo._id },
      { endDate: newEndDate }
    );
    if (updatedPass.nModified == 0) throw new Error("Failed to update pass");

    return res
      .status(200)
      .json({ message: "Pass renewed successfully", pass: updatedPass })
      .end();
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Error at server -> ${err.message}` });
  }
};
