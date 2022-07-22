const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Buy Food","Cook Food"];

app.get("/", function (req, res) {
    const date = new Date();

    var day = "";
    
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    day = date.toLocaleDateString("en-GB",options);

    res.render("list",{
        kindOfDay : day,
        newListItem : items
    });
})

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});