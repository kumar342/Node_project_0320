const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  mobile_number: {
    type: Number,
    required: true
  },
  mother_name: {
    type: String,
    required: true
  },
  father_name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});
const Student = mongoose.model("studentsData", StudentSchema);
module.exports = Student;
