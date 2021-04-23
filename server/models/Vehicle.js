const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vehicleSchema = new Schema({
    vehicleId : {
        type : String,
        required : true
    },
    registrationNum : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    brandName : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    capasity : {
        type : String,
        required : true
    },
    chassiNumber : {
        type : String,
        required : true
    },
    engineNumber : {
        type : String,
        required : true
    },
    adminId : {
        type : String,
        required : true
    },
    licenseNo : {
        type : String,
        required : true
    },
    branchId : {
        type : Number,
        required : true
    }
    

}, {
    collection: 'vehicles'
  })

module.exports = mongoose.model('Vehicle', vehicleSchema)