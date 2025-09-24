console.log("fullstack todo project part 1")

const express = require("express");
const mongoose = require("mongoose");

const app = express();
// const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

