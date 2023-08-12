const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  "mongodb+srv://szkulkerolf:0fCD3B089yTHXY8v@database1.3uqjdmn.mongodb.net/?retryWrites=true&w=majority"
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

const recipiesRouter = require("./routes/recipies.js");
app.use("/api/recipies", recipiesRouter);

app.listen(5000, () => {
  console.log("Server started");
});
