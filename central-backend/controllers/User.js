import User from "../models/User.js";

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
    } = req.body;

    const exists = await User.findOne({ uid: uid });
    if (exists) return res.status(400).json({ message: "UID already exist" });
    const newUser = new User({
      uid,
      name,
      gender,
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
