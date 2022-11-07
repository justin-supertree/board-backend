import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

import helloRouter from "./routes/hello";

// express 기본 객체 생성
const app = express();

// express 서버세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// router setting
app.use(
  "/",
  //   res.status(500).json({ data: "Hello World!" });
  //   res.send({ data: "Hello world! 2" });
  helloRouter
);

// MVC => Model, View, Controller
// Modal(DB Schema), Router, Controller

const PORT = 4000; //8080, 5000

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// 서버 시작 및 구동
app.listen(PORT, handleListening());
