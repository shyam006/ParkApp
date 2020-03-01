const express = require('express');
const app = express();
const parkingRoutes = express.Router();

// Require Parking model in our routes module
let Parking = require('../models/Parking');

// Defined store route
parkingRoutes.route('/add').post(function (req, res) {
  let parking = new Parking(req.body);
  parking.save()
    .then(parking => {
      res.status(200).json({'parking': 'parking in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


parkingRoutes.route('/').get(function (req, res) {
    if(err){
        console.log(err);
      }
      else {
        res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
      }
    
});

// Defined get data(index or listing) route
// parkingRoutes.route('/').get(function (req, res) {
//     Parking.find(function (err, parking){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(parking);
//     }
//   });
// });









// // Defined edit route
// parkingRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Parking.findById(id, function (err, parking){
//       res.json(parking);
//   });
// });

// //  Defined update route
// parkingRoutes.route('/update/:id').post(function (req, res) {
//     Parking.findById(req.params.id, function(err, next, parking) {
//     if (!parking)
//       return next(new Error('Could not load Document'));
//     else {
//         parking.person_name = req.body.person_name;
//         parking.parking_name = req.body.parking_name;
//         parking.parking_gst_number = req.body.parking_gst_number;

//         parking.save().then(parking => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// parkingRoutes.route('/delete/:id').get(function (req, res) {
//     Parking.findByIdAndRemove({_id: req.params.id}, function(err, parking){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = parkingRoutes;