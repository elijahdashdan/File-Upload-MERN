'use strict';

const express = require('express');
const {upload} = require('../helpers/fileHandler');
const {FileUpload, getFiles,deleteFile} = require('../controllers/fileController');
const router = express.Router();

// Uploading a File
router.post('/uploadFile', upload.single('file'), FileUpload);

// Get files
router.get('/getFiles',getFiles);

// Delete file
router.delete('/deleteFile/:id',deleteFile);

module.exports = {
    routes: router
}