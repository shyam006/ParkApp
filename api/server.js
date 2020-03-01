const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    //#region Fileupload Entity setup
    //File upload <BEGIN>
    const multer = require('multer');
    const DIR = '../Images';

    let storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, DIR);
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + path.extname(file.originalname));
      }
  });
  let upload = multer({storage: storage});
  //File upload <END>
  //#endregion


    config = require('./DB');
    let Parking = require('./models/Parking');
    let ParkingAdmin = require('./models/ParkingAdmin');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true})); //file upload
    app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
    const port = process.env.PORT || 4000;

    app.listen(4000, () => {
      console.log('Listening on port ' + port);
  });
// park_report
  app.get('/', (req, res) => {
    Parking.find(function (err, parking){
      if(err){
        console.log(err);
      }
      else {
        res.json(parking);
      }
    });
});


  //#region Insert-DP/MP
app.post('/add', (req, res) => {
  
  const parking = new Parking({
    vehicleNo: req.body.vehicleInfo, 
    Date: req.body.date,
    Type: req.body.type
});

  parking.save()
    .then(parking => {
      res.status(200).json({'parking': 'parking added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
 //#endregion

//#region Fileupload API code
//File upload <BEGIN>
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/api/upload',upload.single('photo'), function (req, res) {
  
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true,
        filename:req.file.filename
      })
    }
});
//File Upload <END>
//#endregion
 
//#region CompanyInformation_Get
// Admin
app.get('/Admin/get', (req, res) => {
  ParkingAdmin.find(function (err, parkingadmin){
    if(err){
      console.log(err);
    }
    else {
      res.json(parkingadmin);
    }
  });
});
//#endregion

//#region Company_Updateinfo
app.post('/update',(req,res)=>{

var newvalues;
  var myquery= {_id:"5e07080befc3c02e706d90b3"};
  if(req.body.filename!==undefined){
    console.log(req.body);
    console.log(req.body.filename);
    newvalues = { $set: {ProfileImage:req.body.filename,Company_name:req.body.Companyname,Address:req.body.Address,updated_at:Date.now()}};
  }
 else
 {
  newvalues = { $set: {Company_name:req.body.Companyname,Address:req.body.Address,updated_at:Date.now()}};
 } 
  ParkingAdmin.findOneAndUpdate(myquery, newvalues).then(parking => {
    res.status(200).json({'parking': 'Updated successfullyc'});
  })
  .catch(err => {
  res.status(400).send("unable to update to database");
  });
});
//#endregion

app.post('/updateCharges',(req,res)=>{

    var myquery= {_id:"5e07080befc3c02e706d90b3"};
    var newval= { $set:{Daily_pass:req.body.DailyCharge,Monthly_pass:req.body.MonthlyCharge}};
    ParkingAdmin.findOneAndUpdate(myquery, newval).then(parking => {
      res.status(200).json({'parking': 'Charges Updated successfullyc'});
    })
    .catch(err => {
    res.status(400).send("unable to update database");
    });
  });

  app.get('/getReport',(req,res)=>{
    console.log("Datafetch server call");
    
    Parking.find(function (err, parkingadmin){
      if(err){
        console.log(err);
      }
      else {
        console.log(parkingadmin.vehicleNo);
        res.json(parkingadmin);
      }
    });

    // app.get('/getReportbyDate',(req,res)=>{
    //   console.log("Datafetch by Date server call");
      
    //   // var myquery= {req.body.};
    //   // var newval= { $set:{Daily_pass:req.body.DailyCharge,Monthly_pass:req.body.MonthlyCharge}};
      
    //   Parking.find({},function (err, parkingadmin){
    //     if(err){
    //       console.log(err);
    //     }
    //     else {
    //       console.log(parkingadmin.vehicleNo);
    //       res.json(parkingadmin);
    //     }
    //   });
    

    //#region findone sample
    // var myquery= {vehicleNo:"TN-21-CQ-6134"};
    // var myquery1={_id: "5e5208ac93459a013cd72afd"};
    // Parking.findOne((myquery),function(err,res){
    //   console.log(res);
    // }).then(parking => {
    //   console.log("successful");
    //   //console.log(parking.vehicleNo);
    //   return res;
    // })
    // .catch(err => {
    // res.status(500).send("unable to fetch data");
    // });

    //#endregion

  });