const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let ParkingAdmin = new Schema({
    ProfileImage: {
    type: String
    },
    Company_name: {
      type: String
    },
    Address: {
      type: String
    },
    Mobile_no: {
      type: String
    },
    Daily_pass: {
      type: Number
    },
    Monthly_pass: {
      type: Number
    },
    updated_at: {
      type: Date
    }
    },{
        collection: 'Admin'
    });

module.exports = mongoose.model('ParkingAdmin', ParkingAdmin);