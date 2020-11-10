const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ParentSchema = new Schema({
  parentName: {
    type: String,
    required: true
  },
  parentContactNo: {
    type: Number,
    required: true
  },
  parentEmail: {
    type: String,
    required: true
  },
  childName: {
    type: String,
    required: true
  },
  childAge: {
    type: Number,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = Parentdetails = mongoose.model('users', ParentSchema);
