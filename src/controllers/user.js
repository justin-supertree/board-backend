import User from "../models/user";

export const joinUser = async (req, res) => {
  try {
    const { email, password, name, age } = req.body;

    console.log(email, password, name, age);
    const data = new User({
      email,
      password,
      salt: "123",
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
