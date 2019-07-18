const express = require("express"),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser");
  
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/",(req, res)=>{
    res.render("index.html")
});

app.listen(process.env.PORT, ()=>{
    console.log("Patatap has started!");
})
