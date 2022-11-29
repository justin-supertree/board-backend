export const postBoard = async (req, res) => {
  try {
    res.send({
      success: true,
      message: null,
      data: "postBoard",
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
