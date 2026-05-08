const Fine = require("../models/Fine");

exports.createFine = async (req, res) => {
  try {
    const fine = await Fine.create(req.body);
    res.status(201).json(fine);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getFines = async (req, res) => {
  try {
    const fines = await Fine.find()
      .populate("user")
      .populate("borrow");

    res.json(fines);
  } catch (error) {
    res.status(500).json(error);
  }
};