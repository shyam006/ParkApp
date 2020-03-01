import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { PServiceService } from '../Service/pservice.service';
import { CompanyInfo } from '../Service/info/company-info';

@Component({
  selector: 'app-monthly-pass',
  templateUrl: './monthly-pass.component.html',
  styleUrls: ['./monthly-pass.component.css']
})
export class MonthlyPassComponent implements OnInit {

  Time = new Date()
  Date = '';
  NextMonth='';
  stateCode = 'TN';
  districtCode = '29';
  areaCode='';
  vechNo='';
  Parkinfo:CompanyInfo[];

  constructor(private ps: PServiceService ) { }
  ngOnInit() {
    this.ps.Companyinfo().subscribe(data => {
      this.Parkinfo = data as CompanyInfo[];
    });
    this.Date = formatDate( this.Time = new Date(), 'dd-MM-yyyy', 'en-US', '+0530');
    var d = new Date(this.Time.getFullYear(), this.Time.getMonth(), this.Time.getDate());
    d.setDate(d.getDate() + 30);
    this.NextMonth = formatDate( d, 'dd-MM-yyyy', 'en-US', '+0530');
  }

  addVehicleformdata(formData) {
    let vehicleInfo: string;
    vehicleInfo = '' + formData.Statecode + '-' + formData.DistrictCode + '-' + formData.Alpahabetcode + '-' + formData.Vnumber;
    const obj = {
      vehicleInfo,
      date: new Date(),
      type:'M'
    };
    if((formData.Statecode !='') && (formData.DistrictCode !='') && (formData.Alpahabetcode !='') && (formData.Vnumber !=''))
    {
    this.ps.addVehicle(obj);
    }
    this.areaCode='';
    this.vechNo='';
    // window.location.reload(true);
  }

}
