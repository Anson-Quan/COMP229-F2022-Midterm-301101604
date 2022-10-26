/*
  File name: COMP229-F2022-Midterm-301101604
  Student name: Thuan An Quan
  Student ID: 301101604
  Web app name: comp229-f2022midterm-301101604.herokuapp.com
  Course: COMP229 - Section 008
  Name: Web Application Development
  Professor: Zakiyabanu Malek
  Date: October 26, 2022
*/

let mongoose = require("mongoose");

// create a model class
let Employee = mongoose.Schema(
  {
    Employeeid: Number,
    Employeename: String,
    Department: String,
    Designation: String,
    Salary: Number,
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", Employee);
