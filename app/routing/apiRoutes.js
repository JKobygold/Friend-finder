var path = require("path");
var friendList = require("../data/friends");


module.exports = function(app){

app.get("/api/friends", function (req, res) {
   res.json(friendList);
});

// app.post("/api/friends", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newfriend = req.body;

//   console.log(friends);

//   // We then add the json the user sent to the character array
//   characters.push(friends);

//   // We then display the JSON to the users
// //   res.json(friends);
// });
};