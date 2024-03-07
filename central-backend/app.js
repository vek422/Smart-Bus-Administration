import express from "express";
import morgan from "morgan";
import router from "./routes/User.js";
const app = express();
app.use(morgan("common"));
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.status(201).send("Hi There......").end();
});

app.post("/", (req, res) => {
  const { uid } = req.body;
  console.log("Request Body :  " + uid);
  res.status(201).send("Hello").end();
});

export default app;
