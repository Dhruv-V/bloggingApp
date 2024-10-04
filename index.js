const express = require("express");
const path = require("path");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const cluster = require("node:cluster");
const os = require("os");

const cpus = os.cpus().length;

console.log(cpus);

const app = express();
const PORT = "8000";

mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then((e) => console.log("mondogb connected"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.set("views", path.resolve("./views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRouter);

app.listen(PORT, () =>
  console.log(`server successfully started on port : ${PORT}`)
);
