const port = 3004;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require('./cors.ts')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors)

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}...`);
});


module.exports = server