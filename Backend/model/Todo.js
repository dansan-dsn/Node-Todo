const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = new mongoose.model("todo", TodoSchema);
