import "module-alias/register.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
import { Server } from "socket.io";
import { createServer } from "http";

const PORT = process.env.PORT || 8080;
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("error", (err) => {
  console.log(`Error -> ${err}`);
});

io.on("connection", (socket) => {
  console.log(`A user Connected  ${socket.id}`);

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on PORT : ${PORT}`);
});
