import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  lastActivity: {
    route: {
      type: String,
    },
    driver: {
      type: String,
    },
    maintainance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusMaintainance",
    },
  },
});

const BusMaintainanceSchema = new mongoose.Schema({
  busInfo: {
    ref: "Bus",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
  issuedMaintainance: {
    type: Date,
    default: Date.now,
  },
  expectedDate: {
    type: Date,
  },
});
const BusLogSchema = new mongoose.Schema({
  busInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Route",
  },
  usersWithPass: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Pass",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Bus = mongoose.model("Bus", BusSchema);
export const BusAssignment = mongoose.model("BusAssignment", BusLogSchema);
export const BusMaintainance = mongoose.model(
  "BusMaintainance",
  BusMaintainanceSchema
);
