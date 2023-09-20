const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res)=> {
  res.send("This is API Route.") 
})

app.listen(5000,()=> {
    console.log(`Sunucu ${5000} portunda çalışıyor.`);
})
