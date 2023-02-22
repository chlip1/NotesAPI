const express = require('express');
const app = express();
const config = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const http = require('http')

//db
require('./db/mongoose');

//parser
app.use(bodyParser.json());

//fix cors
// app.use(cors());

// routes
app.use('/api/', apiRouter);

app.listen(config.port, function() {
    console.log("serwer slucha... ")
})