import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(morgan("common"));
app.use(express.json());
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(function (req, res, next) {
  cors(corsOptions)(req, res, next);
});

export default app;
