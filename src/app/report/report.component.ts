import { Component, OnInit } from '@angular/core';
import {PServiceService} from '../Service/pservice.service';
import { ReportData } from '../Service/info/company-info'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private ps: PServiceService ) { }

  reportInfo:ReportData[];
  reportInfoByDate:ReportData[];



    ngOnInit() {
      //Service call for Data fetch from Mongo
      this.ps.ReportData().subscribe(data=>//console.log(data));    
        {
        this.reportInfo=data as ReportData[];
        console.log(this.reportInfo);
      });
    }

    GetDate(FromDate,ToDate) {
      alert(FromDate);
      alert(ToDate);
      // this.ps.reportDataByDate(FromDate,ToDate).subscribe(data=>//console.log(data));    
      // {
      // this.reportInfoByDate=data as ReportData[];
      // console.log(this.reportInfo);
      // });
    }
}


