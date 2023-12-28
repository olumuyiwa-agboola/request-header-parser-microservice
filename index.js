// init project
require('dotenv').config();
var express = require('express');
var app = express();

// mount cors for freeCodeCamp tests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// serve static assets
app.use(express.static('public'));

// serve index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// endpoint
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip; // IP address
  const language = req.headers['accept-language']; // language, from the 'Accept-Language' header
  const software = req.headers['user-agent']; // software, from the 'User-Agent' header

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
