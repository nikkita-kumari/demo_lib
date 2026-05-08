const express = require("express");
const router = express.Router();

const {
  borrowBook,
  getBorrowedBooks,
} = require("../controllers/borrowController");

router.post("/create", borrowBook);
router.get("/all", getBorrowedBooks);

module.exports = router;