const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
let name = "Phil"
let name2 = "World"

app.get("/", (req, res) =>{
    res.send(<h1>Hello Phil ${name}<h1>);
});

app.get("/", (req, res) =>{
    res.send(<h1>Hello World${name2}<h1>);
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
});