const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Parking = new Schema({
  vehicleNo: {
    type: String
  },
  Date: {
    type: Date
  },
  Type:{
    type: String
  }
},{
    collection: 'park_report'
});

module.exports = mongoose.model('Parking', Parking);