const express = require('express');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const productModel = require('../models/product');
const url = 'mongodb+srv://admin:admin@andromeda.esfay3s.mongodb.net/andromeda';
const { config } = require('dotenv');

config({ path: '../config/config.env' });
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const product = JSON.parse(fs.readFileSync(`./output.json`, 'utf-8'));
// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await productModel.create(product);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await productModel.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
