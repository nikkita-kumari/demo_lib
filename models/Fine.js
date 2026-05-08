const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    borrow: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Borrow",
    },
    amount: Number,
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fine", fineSchema);