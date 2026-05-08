const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    isbn: String,
    category: {
      type: String,

      enum: [
        "Programming",

        "Science",

        "Fiction",

        "Self Help",

        "History",

        "Business",

        "AI",

        "Technology",
      ],
    },
    totalCopies: Number,
    availableCopies: Number,
    borrowingCost: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Book", bookSchema);
