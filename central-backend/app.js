import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.status(201).send("Hi There......").end();
});
app.post("/", (req, res) => {
  const { name, age } = req.body;
  console.log(`Name : ${name}\n Age :${age}`);
  res.status(201).send("Hello").end();
});

export default app;
