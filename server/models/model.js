const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Model", modelSchema);
