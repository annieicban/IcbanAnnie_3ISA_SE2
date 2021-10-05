fs.mkdir("./data", function (err){
    const fs = require("fs");
    fs.mkdir("./data", function (err){
        if(err){
            return console.error (err);
        } else {
            console.log ("created test directory")
        }
    });