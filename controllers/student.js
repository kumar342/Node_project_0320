const Student = require("../models/Student");

const TotalData = (req, res) => {
  Student.find()
    .then(TotalData => {
      res.json(TotalData);
    })
    .catch(error => {
      res.send(error);
    });
};

const addStudentData = (req, res) => {
  console.log("value", req.body);

  Student.create({
    name: req.body.name,
    department: req.body.department,
    section: req.body.section,
    college: req.body.college,
    mobile_number: req.body.mobile_number,
    mother_name: req.body.mother_name,
    father_name: req.body.father_name,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender
  })
    .then(student => {
      res.json(student);
    })
    .catch(error => {
      res.send(error);
    });
};

const studentFind = (req, res) => {
  const student = Student.find({ department: req.params.id })
    .then(student => {
      res.json(student);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = { TotalData, addStudentData, studentFind };
