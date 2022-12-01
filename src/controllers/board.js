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

export const getBoardList = async (req, res) => {
  try {
    const { page, limit } = req.body;

    const data = await Board.find()
      .sort({ create_at: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

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

export const getBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;

    const data = await Board.findById({ _id: id });
    const isMyBoard = user._id.toString() === data.userId.toString();

    console.log("isMyBoard > ", isMyBoard);

    res.send({
      success: true,
      message: null,
      data: {
        ...data._doc,
        isMyBoard,
      },
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

export const deleteBoard = async (req, res) => {
  try {
    const { id } = req.body;
    const { user } = res.locals;

    const findBoard = await Board.findById({ _id: id });
    if (!findBoard) throw new Error("Board is not found!");

    if (user._id.toString() !== findBoard.userId.toString())
      throw new Error("Invaild User!");

    await Board.findByIdAndDelete({ _id: id });

    res.send({
      success: true,
      message: null,
      data: null,
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
