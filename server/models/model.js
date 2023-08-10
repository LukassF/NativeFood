const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  adjectives: [
    {
      type: String,
      required: true,
    },
  ],

  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  image: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  preparation: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Model", modelSchema);
