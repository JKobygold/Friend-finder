var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT|| 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/",function(req,res) {
   res.send("welcome to starwars");
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });



app.listen(PORT, ()=>{
console.log("App listening on port " + PORT);
});






// Will need a response.end to return info to user. Logic can also be passed through servers