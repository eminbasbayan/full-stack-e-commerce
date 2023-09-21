const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Yeni bir kupon oluşturma (Create)
router.post("/", async (req, res) => {
    try {
      const newCoupon = new Coupon(req.body);
      await newCoupon.save();
  
      res.status(201).json(newCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });


  module.exports = router