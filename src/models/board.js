import mongoose from "mongoose";

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  writer: { type: String, default: null },
  title: { type: String, required: true },
  content: { type: String, default: null },
  create_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("boards", boardSchema);
("");
