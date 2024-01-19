import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AccountDataModel, AccountDataService, StaticClass } from '../services/AcoountData.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[AccountDataService]

})
export class NewAccountComponent implements OnInit {

  @ViewChild('accountNameData') accountNameData!:ElementRef
  @ViewChild('statusData') statusData!:ElementRef

  isok = StaticClass.testData=true;

  //make instance of AccountDataService
  constructor(private serviceCall:AccountDataService) {
    this.serviceCall.statusChange.subscribe((status:string)=>{
      alert(status)
    })

  }
  
  ngOnInit(): void {
  }
  
  addData(){
    let allData = this.serviceCall.getData().length;
    this.serviceCall.addAccount(new AccountDataModel({
      accountId: allData++,
      accountName: this.accountNameData.nativeElement.value,
      accountStatus: this.statusData.nativeElement.value
    }))
    // this.serviceCall.addAccount(this.accountNameData.nativeElement.value,this.statusData.nativeElement.value)
  }
  

}
