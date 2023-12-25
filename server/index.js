const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require('body-parser')
const UserModel = require("./models/Users");

const app = express();
const port = 3000;

app.use(cors()); //to access bose server and client side
app.use(express.json()); // Middleware to parse data to JSON format (bodyParser.json())
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
//mongodb+srv://solofaxum:<password>@cluster0.lufi6mk.mongodb.net/?retryWrites=true&w=majority

//create mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/crud-operation");

//after creating Model and imported , then create API
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
// app.post("/example", (req, res) => {
//   const requestData = req.body;
//   // Process the request data...

//   res.json({ message: "Request processed successfully" });
// });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
