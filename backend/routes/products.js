const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Yeni bir ürün oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

/* 
Örnek data:

{
    "name": "Ürün Adı",
    "img": [
        "https://e-commerce-udemy.netlify.app/img/products/product1/1.png",
        "https://e-commerce-udemy.netlify.app/img/products/product1/2.png",
        "https://e-commerce-udemy.netlify.app/img/products/product1/3.png",
        "https://e-commerce-udemy.netlify.app/img/products/product1/2.png"
    ],
    "reviews": [
        {
            "text": "Bu ürün harika!",
            "rating": 5,
            "user": "5fbc7c318f4e3d4e9c53b27e"
        },
        {
            "text": "Fiyatı çok yüksek.",
            "rating": 2,
            "user": "5fbc7c318f4e3d4e9c53b27e"
        }
    ],
    "description": "Ürün açıklaması",
    "colors": [
        "Mavi",
        "Kırmızı",
        "Yeşil"
    ],
    "sizes": [
        "S",
        "M",
        "L"
    ],
    "price": {
        "current": 50,
        "discount": 40
    },
    "category": "650cb032054382a2c88bf42e"
}

*/
