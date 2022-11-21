import mongoose from "mongoose";

const Schema = mongoose.Schema;

// PK = Primary key => 절대 중복되지않고, 유일한 값
// FK = Foriegn Key => 참고 키

// ORM => O  Rela

const userSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("users", userSchema);
