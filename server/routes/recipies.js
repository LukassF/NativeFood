const express = require("express");
const router = express.Router();
const model = require("../models/model");
var bodyParser = require("body-parser");

router.get("/", async (req, res) => {
  const query = req.query.query || "";
  const filter = req.query.filter || "";
  const id = req.query.id || "";
  const idArray = id[0] === "[" ? id.slice(1, -1).split(",") : id.split(",");

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

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json({ limit: "100mb", extended: true }));
router.use(bodyParser.text({ limit: "200mb" }));

router.post("/", async (req, res) => {
  const recipe = new model({
    name: req.body.name,
    subtitle: req.body.subtitle,
    image: req.body.image,
    ingredients: req.body.ingredients,
    adjectives: req.body.adjectives,
    time: req.body.time,
    preparation: req.body.preparation,
    difficulty: req.body.difficulty,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
