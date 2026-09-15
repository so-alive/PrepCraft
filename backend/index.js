const express = require("express");
const cors = require("cors");
const dns = require("dns");
require("dotenv").config();

// Use Cloudflare DNS for MongoDB Atlas SRV resolution
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PrepCraft API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});