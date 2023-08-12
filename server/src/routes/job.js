const express = require("express");
const Job=require("../models/job")
const router = express.Router();

router.post("/jobsPost", async (req, res) => {
    try {
      const newJob = new Job(req.body);
      const savedJob = await newJob.save();
      res.status(201).json(savedJob);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports=router;