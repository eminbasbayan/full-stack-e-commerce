const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://emin-e-commerce:Xu63EREZP61cSKyS@mern-e-commerce.ixovwma.mongodb.net/"
    );
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res) => {
  res.send("This is API Route.");
});

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
