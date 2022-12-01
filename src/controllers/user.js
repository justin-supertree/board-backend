import jwt from "jsonwebtoken";
import { createHashedPassword, verifyPassword } from "../lib/auth";

import User from "../models/user";

export const joinUser = async (req, res) => {
  try {
    const { email, password, name, age } = req.body;

    const checkEmail = await User.findOne({
      email,
    });

    if (checkEmail) throw new Error("email already exist!");

    const { hashedPassword, salt } = await createHashedPassword(password);

    const data = new User({
      email,
      password: hashedPassword,
      salt,
      name,
      age,
    });

    await data.save(); // User Schema Insert

    res.send({
      success: true,
      message: null,
      data: "join user",
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: "join user",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 유저정보 유무확인
    const user = await User.findOne({ email });
    if (!user) throw new Error("Sorry! User not found!");

    // 비밀번호 유무확인
    const verified = await verifyPassword(password, user.salt, user.password);
    if (!verified) throw new Error("password does not match");

    // 토큰발행(JWT)
    const payload = {
      email: user.email,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: null,
      data: { accessToken },
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
