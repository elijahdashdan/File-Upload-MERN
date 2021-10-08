'use strict';

// Declare Variables and Imports
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileUploadRoutes');
const mongoose = require('mongoose');

// Handle Ports
const port = process.env.PORT || 8080;

//Use Express to Handle routes and requests
const app = express()

// Use CORS for resource sharing
app.use(cors());

mongoose.connect('mongodb://localhost/upload-files-database', {useNewUrlParser: true,useUnifiedTopology: true});

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',fileRoutes.routes)

app.get("/", function(req,res){
    res.send("Server is Running")
})

app.listen(port, function() {
    console.log(`Server is Running! http://localhost:${port}`)
});