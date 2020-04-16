var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
// require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);

// app.get("app/routing/apiRoutes.js", function (req, res) {
//   res.json(friendsData);
// });


app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});






// Will need a response.end to return info to user. Logic can also be passed through servers