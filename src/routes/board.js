import express from "express";
import { postBoard } from "../controllers/board";
import { loginCheck } from "../middlewares/auth";

const router = express.Router();

router.post("/", postBoard);
router.post("/", loginCheck);

export default router;
