import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  pAddress: {
    type: String,
    required: true,
  },
  boardingPoint: {
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
  passInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "",
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
