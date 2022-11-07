import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

// express 기본 객체 생성
const app = express();

// express 서버세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// router setting
const PORT = 4000; //8080, 5000
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// 서버 시작 및 구동
app.listen(PORT, handleListening());
