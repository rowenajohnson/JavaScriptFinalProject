const mongoose = require('mongoose');
const StudentDetailsSchema = new mongoose.Schema({
  StudentName: {
    type: String,
    required: false
  },
  StudentID: {
    type: number,
    required: true
  },
  Course: {
    type: Number,
    required: false,
    default: 1
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Student', StudentDetailsSchema);