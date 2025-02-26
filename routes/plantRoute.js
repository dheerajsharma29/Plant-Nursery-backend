const express = require("express");
const Plant = require("../models/Plant");

const router = express.Router();

// Fetch all plants
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Add a new plant
router.post("/", async (req, res) => {
  try {
    const { email,message } = req.body;
    const newPlant = new Plant({ email,message });
    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(500).json({ error: "Failed to add plant" });
  }
});

module.exports = router;
