import mongoose from "mongoose";

const userTravelLogSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  departureDetails: {
    time: { type: mongoose.Schema.Types.Date, required: true },
    destination: { type: String, required: true },
  },
  destination: {
    time: { type: mongoose.Schema.Types.Date, required: true },
    destination: { type: String, required: true },
  },
  remark: {
    type: String,
    default: "",
  },
});

const userTravelLog = mongoose.model("user-travel-log", userTravelLogSchema);
export default userTravelLog;
