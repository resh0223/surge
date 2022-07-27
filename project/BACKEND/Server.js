const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;
global.URI = url;

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!');
})


const student = require('./routes/Register/student')
app.use("/student" , student);


const user = require('./routes/Register/user')  
app.use("/user" , user);




app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`)
});

