import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { DailyPassComponent } from './daily-pass/daily-pass.component';
import { MonthlyPassComponent } from './monthly-pass/monthly-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective,FileUploader } from 'ng2-file-upload';

import {PServiceService} from './Service/pservice.service';
import { ReportComponent } from './report/report.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    DailyPassComponent,
    MonthlyPassComponent,
    FileSelectDirective,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
