'use strict';

const path = require('path');
const multer = require('multer');
const fs = require('fs');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

const deleteTemp = fs.unlink(filePath, function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

const upload = multer({ storage: storage })

module.exports = { upload, deleteTemp }