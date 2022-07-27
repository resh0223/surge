const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const student = new Schema({

    id : {
        type : number,
        required : true
    },
    
    firstName : {
        type : String,
        required : true
    },
    
    lastName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    dateOfBirth:  {
        type : Date,
        required : true
    },
    
    mobile: {
        type : number,
        required : true
    },
    
   
    status : {
        type : boolean,
        required : true
    },

    password : {
        type : String,
        required : true
    },
    
    accountType:{
        type : String,
        required : true
    },

})
//send data to the database routes
const studentSchema = mongoose.model("student",student);

module.exports = studentSchema;
