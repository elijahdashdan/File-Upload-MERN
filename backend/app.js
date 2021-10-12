// Declare Imports
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileUploadRoutes');
const mongoose = require('mongoose');

//Use Express to Handle routes and requests
const app = express()

// Use CORS for resource sharing
app.use(cors());

//Connect to Mongo DB using Mongoose
mongoose.connect('mongodb://localhost/upload-files-database', {useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',fileRoutes.routes)


//Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('../frontend/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'../frontend','build','index.html'))
    });
}

module.exports = app;