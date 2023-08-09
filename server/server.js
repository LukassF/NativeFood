const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const model = require("./models/model");

app.get("/api", async (req, res) => {
  const query = req.query.query || "";
  const filter = req.query.filter || "";
  const id = req.query.id || "";
  const idArray = id[0] === "[" ? id.slice(1, -1).split(",") : id.split(",");

  console.log(idArray);

  try {
    let data;
    if (idArray[0] == "")
      data = await model.find({
        $and: [
          {
            $or: [
              { name: { $regex: query, $options: "i" } },
              { ingredients: { $regex: query, $options: "i" } },
            ],
          },

          {
            adjectives: {
              $regex: filter,
              $options: "i",
            },
          },
        ],
      });
    else data = await model.find({ _id: { $in: idArray } });
    // else data = await model.findById(id);

    res.json(data);
  } catch (err) {
    console.error(err);
  }
});
// var ip = require("ip");
// const adress = ip.address();
// console.log(adress);

mongoose.connect(process.env.DATABASE_CONNECTION);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
