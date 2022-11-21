import express from "express";
import { joinUser } from "../controllers/user";

const router = express.Router();

router.post("join", joinUser);

export default route;
