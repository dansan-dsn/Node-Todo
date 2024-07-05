require("dotenv").config();
const express = require("express");
const todo = require("./router/todo");
const con = require("./model/model");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo", todo);

con.connect((err) => {
  if(err) return console.log(err.message)
  console.log("Connected to DB")

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})