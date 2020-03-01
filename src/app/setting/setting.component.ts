import { Component, OnInit, Input } from '@angular/core';
import {DailyPassComponent} from '../daily-pass/daily-pass.component'
import {PServiceService} from '../Service/pservice.service';
import { CompanyInfo } from '../Service/info/company-info'
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-setting',  
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Input() a: string;
  Parkinfo:CompanyInfo[];
  filename: string;
  Companyname : string;
  Address : string;
  DailyCharge : string;
  MonthlyCharge : string;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  constructor(private ps: PServiceService,private httpClient: HttpClient) { }

  ngOnInit() {
  this.ps.Companyinfo().subscribe(data => {
  this.Parkinfo = data as CompanyInfo[];  
  this.Companyname = this.Parkinfo[0]['Company_name'];
  this.Address = this.Parkinfo[0]['Address'];
  this.DailyCharge = this.Parkinfo[0]['Daily_pass'];
  this.MonthlyCharge = this.Parkinfo[0]['Monthly_pass']; 
  });
   
}


UpdateProfile(ProfileformData){
  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         
         if(status==200) // Update Collection details only if file upload is successsfull
         {
            let jsonarray=JSON.parse(response);
            this.filename=jsonarray.filename;
            this.Companyname=ProfileformData.Companyname;
            this.Address=ProfileformData.Address;
            console.log("check",this.filename,this.Companyname,this.Address);

            const obj = {
              filename:this.filename,
              Companyname:this.Companyname,
              Address:this.Address
            };
            this.ps.Updateinfo(obj);
            console.log("After Service call check")
         }
         else
         console.log("No image");
         

        }
        this.Companyname=ProfileformData.Companyname;
            this.Address=ProfileformData.Address;

        const obj = {
          Companyname:this.Companyname,
          Address:this.Address
        };
       
        this.ps.Updateinfo(obj);
        console.log("checkafterurl");
}

UpdateCharge(ProfileformData){
  const obj = {
    DailyCharge:ProfileformData.DailyCharge,
    MonthlyCharge:ProfileformData.MonthlyCharge
  };
  this.ps.Updatecharge(obj);
}

}
