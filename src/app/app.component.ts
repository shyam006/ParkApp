import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParkApp';

  clickCallback() {
    $('aside').toggleClass('close');
    $('aside').toggleClass('sidebar_shadow');
    $('#content').toggleClass('aside_bar');
  }
  
}
