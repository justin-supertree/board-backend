import JWT from "jsonwebtoken";

import User from "../models/user";

export const loginCheck = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      throw new Error("authorization is required");

    // Token을 보낼 때 헤더에 Bearer 토큰값 으로 보내져서 저렇게 split 해야 함
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) throw new Error("invalid token");

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    if (!decoded) throw new Error("invalid signature");

    const today = new Date().getTime();
    const exp = decoded.exp * 1000;

    if (today > exp) throw new Error("access token has expired");

    // Token 안의 이메일 정보를 사용해 User에서 정보 찾아옴
    res.locals.user = await User.findOne({ email: decoded.email });
    // next 파라미터는 다음을 실행하라고 명형하는 것으로, 미들웨어에서 사용됨
    // 하단의 next()가 진행되면 controller로 이동하게 됨
    next();
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
