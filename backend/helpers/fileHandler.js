'use strict';

const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage })


module.exports = { upload}