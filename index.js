var express = require("express");
var app = express();
var port = 3000;
 


 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/create", (req, res) => {
//  var myData = new User(req.body);
//  myData.save()
//  .then(item => {
//  res.send("item saved to database");
//  })
//  .catch(err => {
//  res.status(400).send("unable to save to database");
//  });
// });



var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/listOfItem", {useNewUrlParser: true,  useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("good!")
});



app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});




const Item = require('./item');

const test = async function(){
    const data = {
        item: "Zonrox",
        quantity: 24,
        priority: 1
    }
    await Item.addItem(data);
    const p = await Item.listItem();
    console.log(p);
}

test();




