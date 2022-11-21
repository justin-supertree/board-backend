import User from "../models/user";

export default joinUser = async (req, res) => {
  try {
    res.send({
      success: true,
      message: null,
      data: "join user",
    });
  } catch (e) {
    res.send({
      success: true,
      message: e.message,
      data: "join user",
    });
  }
};
