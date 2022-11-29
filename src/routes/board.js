import express from "express";
import { postBoard } from "../controllers/board";

const router = express.Router();

router.post("/", postBoard);

export default router;
