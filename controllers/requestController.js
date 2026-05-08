const Request = require("../models/Request");

exports.createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate("user")
      .populate("book");

    res.json(requests);
  } catch (error) {
    res.status(500).json(error);
  }
};