const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notes = new Schema({

    subjectName : {
        type : String,
        required : true
    },
    
    note : {
        type : String,
        required : true
    },
    
})
//send data to the database//routes
const notesSchema = mongoose.model("notes",notes);

module.exports = notesSchema;