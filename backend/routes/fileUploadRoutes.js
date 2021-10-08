'use strict';

const express = require('express');
const {upload} = require('../helpers/fileHandler');
const {FileUpload, getFiles} = require('../controllers/fileController');
const router = express.Router();

// Uploading a File
router.post('/uploadFile', upload.single('file'), FileUpload);

// Get files
router.get('/getFiles',getFiles);

module.exports = {
    routes: router
}