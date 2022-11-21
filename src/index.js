import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRouter from "./routes/user";

// express 기본 객체 생성
const app = express();

// express 서버세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/board", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () =>
  console.log(`Connected to mongo server: ${process.env.PORT}`)
);

// router setting
// app.use(
//   "/user",
//   //   res.status(500).json({ data: "Hello World!" });
//   //   res.send({ data: "Hello world! 2" });
//   userRouter
// );
app.use("/user", userRouter); // [Post] user join

// MVC => Model, View, Controller
// Modal(DB Schema), Router, Controller

const PORT = 4000; //8080, 5000

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// 서버 시작 및 구동
app.listen(PORT, handleListening());
