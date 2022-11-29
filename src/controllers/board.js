import Board from "../models/board";

export const postBoard = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { user } = res.locals;
    console.log(user);
    const data = new Board({
      userId: user._id,
      writer: user.name,
      email: user.email,
      title,
      content,
    });

    await data.save();

    res.send({
      success: true,
      message: null,
      data,
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
