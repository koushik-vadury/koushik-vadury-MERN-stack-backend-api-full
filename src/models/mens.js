const mongoose = require("mongoose");
const Validator = require("Validator");

const mensSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

const MensRanking = new mongoose.model("MenRanking", mensSchema);
module.exports = MensRanking;
