import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  personalDetails: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    pAddress: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
  },
  boardingPoint: {
    type: String,
    required: true,
  },
  passInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pass",
  },
  travelLogs: {
    type: Map,
    of: { type: mongoose.Schema.Types.ObjectId, ref: "user-travel-log" },
    default: {},
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
