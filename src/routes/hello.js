import express from "express";
import { hello } from "../controllers/hello";

// 라우터 객체 생성
const router = express.Router();

// Method: GET
// 경로: "/"
// 실행 할 함수: hello();
router.get("/", hello);
// router.post
// router.patch
// router.get

export default hello;
