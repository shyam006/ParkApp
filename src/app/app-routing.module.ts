import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyPassComponent } from './daily-pass/daily-pass.component';
import { SettingComponent } from './setting/setting.component';
import { MonthlyPassComponent } from './monthly-pass/monthly-pass.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: '', component: DailyPassComponent},
  {path: 'DailyPass', component: DailyPassComponent},
  {path: 'Setting', component: SettingComponent},
  {path: 'MonthlyPass', component: MonthlyPassComponent},
  {path: 'ParkReport', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
