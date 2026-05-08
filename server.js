const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/requests", require("./routes/requestRoutes"));
app.use("/api/borrow", require("./routes/borrowRoutes"));
app.use("/api/fines", require("./routes/fineRoutes"));

app.get("/", (req, res) => {
  res.send("Library Management API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});