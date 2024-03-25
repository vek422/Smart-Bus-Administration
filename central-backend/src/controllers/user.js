import Pass from "../models/Pass.js";
import User from "../models/User.js";
import { format, addDays } from "date-fns";
export const addUser = async (req, res) => {
  try {
    const {
      name,
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
      name,
      gender,
      age,
      email,
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
    const { uid } = req.query;
  } catch (err) {
    return res.status(500).json({ message: `Error at server -> ${err}` });
  }
};

export const renewPass = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid: uid });
    if (!user) return res.status(404).json({ message: "User Not Found" });

    // check if have pass already
    const startDate = new Date();
    const endDate = addDays(new Date(), 30);
    // console.log(startDate, endDate);
    const newPass = new Pass({
      startDate: startDate,
      endDate: endDate,
    });
    const savedPass = await newPass.save();
    await User.updateOne({ uid }, { passInfo: savedPass._id });
    return res.status(201).json({ message: "Pass created Successfully" }).end();

    // calculate the remaining pass detail and increment it
  } catch (err) {
    return res.status(500).json({ message: `Error at server -> ${err}` });
  }
};
