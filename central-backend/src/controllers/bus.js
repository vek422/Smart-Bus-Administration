import User from "../models/User.js";
import userTravelLog from "../models/userTravelLog.js";
import { isPassValid } from "../services/pass.js";

const verifyUser = async (req, res) => {
  try {
    const { uid, location } = req.body;
    if (!uid) return res.status(400).json({ message: "Invalid Request" }).end();

    //check if have valid uid
    const user = await User.findOne({ uid: uid }).populate("passInfo");
    if (!user) return res.status(404).json({ message: "Invalid User" }).end();

    //check if have valid pass
    let remark = "";
    if (user?.passInfo && isPassValid(passInfo)) {
      remark = "valided";
      res.status(200).json({ message: "Access Granted" }).end();
    } else {
      remark = "invalid";
      res.status(403).json({ message: "Invalid Pass" }).end();
    }
    // Log The user
    const userLog = new userTravelLog({
      uid: uid,
      departureDetails: {
        time: new Date(),
        destination: location,
      },
      remark: remark,
    });
    const savedLog = await userLog.save();
    //update the log in user document
    await User.findOneAndUpdate(
      { uid: uid },
      { travelLog: { $push: savedLog._id } }
    );
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Error At Server ${err}` })
      .end();
  }
};
