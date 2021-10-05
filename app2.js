var fs = require("fs");
var stream;
stream = fs.createReadStream("D://info2.txt");

stream.on("info2", function(data){
    var hello = data.toString();
    console.log(hello);
});