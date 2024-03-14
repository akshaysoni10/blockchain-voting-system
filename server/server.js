const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee.js");

const app = express();
app.use(express.json());
app.use(cors());

//6K0Sg0BVVVFraK6Y
mongoose.connect("mongodb+srv://aksoni:6K0Sg0BVVVFraK6Y@cluster0.heao5zy.mongodb.net/")

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
