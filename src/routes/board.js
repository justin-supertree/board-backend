import express from "express";

import {
  postBoard,
  getBoardList,
  getBoard,
  deleteBoard,
  patchBoard,
} from "../controllers/board";
import { loginCheck } from "../middlewares/auth";

const router = express.Router();

router.use("/", loginCheck);
router.post("/", postBoard);

router.get("/list", loginCheck, getBoardList);
router.get("/:id", loginCheck, getBoard);
router.delete("/", loginCheck, deleteBoard);
router.patch("/", loginCheck, patchBoard);

export default router;
