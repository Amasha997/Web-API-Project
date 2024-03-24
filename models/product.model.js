const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  size: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  color: {
    type: String,
    require: true
  }


}, {
    timestamps: true
});

module.exports = mongoose.model('Products', productSchema)