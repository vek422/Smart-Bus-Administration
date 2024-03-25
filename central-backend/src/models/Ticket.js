import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    studentInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      require: true,
    },
    busInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
