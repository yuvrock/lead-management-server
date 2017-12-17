const express = require('express');

const app = express();

// serve static content from under /public/ dir
app.use('/', express.static(__dirname + "/public/"));

// Serve some script & stylesheet dependencies from angular-patternfly
app.use('/dependencies', express.static(__dirname + "/node_modules/angular-patternfly/"));


app.listen(4000, function(){
  console.log("Server started at port 4000");
});
