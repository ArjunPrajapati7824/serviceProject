import { Component } from '@angular/core';
import { AccountDataService } from './services/AcoountData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[AccountDataService]



})
export class AppComponent {
  title = 'ServiceProject';

  constructor(){}

  // getLog(){
  //   this.loggingservice.loggingStatus("Hello Log")
  // }
  }
