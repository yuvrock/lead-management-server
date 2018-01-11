const express = require('express');
const ws = require('./ws');
var bodyParser = require("body-parser");

var callername = '';

const app = express();

const WebSocket = require('ws');

const wsc = new WebSocket('ws://localhost:40510', {
  perMessageDeflate: false
});

wsc.on('open', function open() {
  wsc.send('something');
});

wsc.on('message', function incoming(data) {
  console.log(data);
});

// serve static content from under /public/ dir
app.use('/', express.static(__dirname + "/public/"));
app.use('/node_modules', express.static(__dirname + "/node_modules/"));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.post('/api/newcall', function(req, res) {
	
		caller = req.body.call;
		res.json({ message: caller + ' is Calling!' });
		wsc.send("{\"message\" : \"" + caller + "\"}");
    });
	
app.post('/api/endcall', function(req, res) {
	
		caller = req.body.Message;
		res.json({ message: 'Call from ' + caller + ' ended!' });
		wsc.send("{\"message\" : \"" + caller + "\"}");
    });
		

app.listen(4000, function(){
  console.log("Server started at port 4000");
});
