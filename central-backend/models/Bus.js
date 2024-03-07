import mongoose from "mongoose";
const BusSchema = new mongoose.Schema(
  {
    // Permanant Fields
    busId: {
      type: String,
      require: true,
      immutable: true,
    },
    busCapacity: {
      type: Number,
      require: true,
      immutable: true,
    },
    busRegistrationNumber: {
      type: String,
      require: true,
      immutable: true,
    },

    //Temporary Field
    route: {},
    driver: {
      type: String,
      default: "",
    },
    studentWithPass: [{}],
    studentWithTicket: [{}],
  },
  { timestamps: true }
);
const Bus = mongoose.model("Bus", BusSchema);
export default Bus;
