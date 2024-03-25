import mongoose from "mongoose";

const userTravelLogSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  departureDetails: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
});

const userTravelLog = mongoose.model("user-travel-log", userTravelLogSchema);
export default userTravelLog;
