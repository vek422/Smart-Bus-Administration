import mongoose from "mongoose";
import dotenv from "dotenv";
import getIpAddress from "./network.js";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("error", (err) => {
  console.log(`Error -> ${err}`);
});

app.listen(PORT, () => {
  console.log(`Listening on http://${getIpAddress()}:${PORT}`);
});
