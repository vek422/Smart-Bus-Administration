import mongoose from "mongoose";

const PassSchema = new mongoose.Schema({
  passId: {
    type: String,
    require: true,
    immutable: true,
  },
  startDate: {
    type: mongoose.Schema.Types.Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

const Pass = mongoose.model("Pass", PassSchema);
export default Pass;
