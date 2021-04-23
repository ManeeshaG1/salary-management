const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salarySchema = new Schema({
    salaryID : {
        type : String,
        required : true
    },
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    workHours : {
        type : Number,
        required : true
    },
    hourlyRate : {
        type : Number,
        required : true
    },
    incentive : {
        type : Number,
        required : true
    },
    deduction : {
        type : Number,
        required : true
    },
    totalSalary : {
        type : Number,
        required : true
    }
}, {
    collection: 'salaries'
  })

module.exports = mongoose.model('Salary', salarySchema)