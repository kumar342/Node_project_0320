const express = require("express");
const routes = express.Router();
const {
  TotalData,
  addStudentData,
  studentFind
} = require("../controllers/student");

routes.get("/total", TotalData);
routes.post("/add", addStudentData);
routes.post("/total/:id", studentFind);

module.exports = routes;
