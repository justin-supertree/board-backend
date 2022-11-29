import express from "express";
import { postBoard } from "../controllers/board";
import { loginCheck } from "../middlewares/auth";

const router = express.Router();

router.use("/", loginCheck);
router.post("/", postBoard);

export default router;
