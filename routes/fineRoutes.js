const express = require("express");
const router = express.Router();

const {
  createFine,
  getFines,
} = require("../controllers/fineController");

router.post("/create", createFine);
router.get("/all", getFines);

module.exports = router;