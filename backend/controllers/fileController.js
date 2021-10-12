'use strict';
const fs = require('fs');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const fileModel = require('../models/filesModel')

async function FileUpload(req, res, next) {
  try {
    const file = new fileModel({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: humanFileSize(req.file.size)
    });
    await file.save()
    res.status(201).send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getFiles(req, res, next) {
  try {
    const files = await fileModel.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteFile(req, res, next) {
  const id = req.params.id
  try {
    await fileModel.findByIdAndRemove(id).exec();
    res.status(200).send("Item Successfully Deleted")
  } catch (error) {
    res.status(400).send(error.message);
  }
   
}

function humanFileSize(bytes, si = true, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}

module.exports = { FileUpload, getFiles, deleteFile}