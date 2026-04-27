const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  genre:{
    type:String,
    required:true,
    enum:['Programming','Novel','Education','Other']
  },
  stockQuantity:{
    type:Number,
    required:true
  }

  // TODO (Student): Add the missing fields based on instructions.md
  // 1. genre
  // 2. stockQuantity

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
