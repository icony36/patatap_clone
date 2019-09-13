const express = require("express"),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser");
  
const app = express();
var url = process.env.DATABASEURL || "mongodb://localhost:27017/patatap_db" ;

mongoose.connect(url);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/",(req, res)=>{
    res.render("index.html")
});

app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
    console.log("Patatap has started!");
})
