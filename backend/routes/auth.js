const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// Kullanıcı Oluşturma (Create - Register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
