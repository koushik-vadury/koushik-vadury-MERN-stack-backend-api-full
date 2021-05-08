const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// router.use(express.json());

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body);
    const result = await addingMensRecord.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const showMensRecord = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(201).send(showMensRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens/:ranking", async (req, res) => {
  try {
    const ranking = req.params.ranking;
    const showMensRecord = await MensRanking.find({ ranking });
    res.status(201).send(showMensRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const showMensRecord = await MensRanking.findById(_id);
    res.send(showMensRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
