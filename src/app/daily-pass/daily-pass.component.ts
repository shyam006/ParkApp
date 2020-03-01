import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { formatDate } from '@angular/common';
import { CompanyInfo } from '../Service/info/company-info'
import {PServiceService} from '../Service/pservice.service';

@Component({
  selector: 'app-daily-pass',
  templateUrl: './daily-pass.component.html',
  styleUrls: ['./daily-pass.component.css']
})

export class DailyPassComponent implements OnInit {
  Time;
  TimeFormat = '';
  stateCode = 'TN';
  districtCode = '29';
  areaCode='';
  vechNo='';
  Parkinfo:CompanyInfo[];
  constructor(private ps: PServiceService ) {
  }

  ngOnInit() {
    setInterval(() => {
      this.TimeFormat = formatDate( this.Time = new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }, 1 );
    this.ps.Companyinfo().subscribe(data => {
      this.Parkinfo = data as CompanyInfo[];
    });
   }

  addVehicleformdata(formData) {
    let vehicleInfo: string;
    vehicleInfo = '' + formData.Statecode + '-' + formData.DistrictCode + '-' + formData.Alpahabetcode + '-' + formData.Vnumber;
    const obj = {
      vehicleInfo,
      date: new Date(),
      type: 'D'
    };
    if((formData.Statecode != '') && (formData.DistrictCode != '') && (formData.Alpahabetcode != '') && (formData.Vnumber != ''))
    {
    this.ps.addVehicle(obj); // Service Call
    }
    this.areaCode='';
    this.vechNo='';
  }
}
