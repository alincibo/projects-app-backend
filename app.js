const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRoutes = require("./routes/user.routes");

const rateLimiter = require("./middlewares/rateLimiter.middleware");

const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimiter);

// routes
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;