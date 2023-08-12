const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DATABASE_CONNECTION);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

const recipiesRouter = require("./routes/recipies.js");
app.use("/api/recipies", recipiesRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
