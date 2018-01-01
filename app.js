const express = require('express');

const app = express();

// serve static content from under /public/ dir
app.use('/', express.static(__dirname + "/public/"));
app.use('/node_modules', express.static(__dirname + "/node_modules/"));


app.listen(4000, function(){
  console.log("Server started at port 4000");
});
