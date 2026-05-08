const Borrow = require("../models/Borrow");

exports.borrowBook = async (req, res) => {
  try {
    const borrow = await Borrow.create(req.body);
    res.status(201).json(borrow);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getBorrowedBooks = async (req, res) => {
  try {
    const books = await Borrow.find()
      .populate("user")
      .populate("book");

    res.json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};