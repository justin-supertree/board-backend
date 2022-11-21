import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // id는 DB에서 각자 구분짓기 위한 PK (primary key) : 절대 중복되지 않는, 유일한 키
  // FK (foreign key) : 외래 키 => 다른 테이블의 PK 값 (관계형 DB에서 사용)

  id: mongoose.Schema.Types.ObjectId, // PK, 문법이라서 이렇게 씀
  email: { type: String, required: true, match: /.+\@.+\..+/, unique: true }, // required의 default 값은 false, match는 정규식 표현, unique의 default 값은 false
  password: { type: String, required: true },
  salt: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, default: null },
  created_at: { type: Date, default: Date.now },
});

// 첫 번째 인자는 테이블 명(복수로 짓는 게 관례), 두 번째 인자는 테이블
module.exports = mongoose.model("users", userSchema);
("");
