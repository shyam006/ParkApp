import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PServiceService {
  // URL for mongo server
  uri = 'http://localhost:4000/';

  constructor(private http: HttpClient ) { }

  //#region DailyPass_Insert
  // to send the data to server and store in mongo
  addVehicle(obj) {
            console.log(obj);
            this.http.post(`${this.uri}add`, obj)
        .subscribe(res => console.log(res));
  }
  //#endregion

  //#region Companyinfo_Get
  Companyinfo() {
    return this.http.get(`${this.uri}Admin/get`);
  }
  //#endregion

  //#region UpdateInfo_Setting
  Updateinfo(obj){
    console.log(obj);
    this.http.post(`${this.uri}update`, obj)
        .subscribe(res => console.log(res));
  }
  //#endregion

  Updatecharge(obj){
    console.log(obj);
    this.http.post(`${this.uri}updateCharges`, obj)
        .subscribe(res => console.log(res));
  }

  //#region ReportDataFetch
  ReportData(){
    console.log("service check");
    return this.http.get(`${this.uri}getReport`); 
        //.subscribe(res => console.log(res));
  }
  //#endregion

  //#region ReportDataFetch
  // reportDataByDate(FromDate,ToDate){
  //   console.log("service check");
  //   return this.http.get(`${this.uri}getReportbyDate`); 
  //       //.subscribe(res => console.log(res));
  // }
  //#endregion
}
