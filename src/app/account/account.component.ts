import { Component, OnInit } from '@angular/core';
import { AccountDataModel, AccountDataService } from '../services/AcoountData.service';
import { NewAccountComponent } from '../new-account/new-account.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[AccountDataService]

})
export class AccountComponent implements OnInit {

  accountdataArray: Array<AccountDataModel> = [];

  constructor(public serviceCall:AccountDataService) { 
    this.accountdataArray = this.serviceCall.getData();
  }
  
  checkform!:boolean
  aname=''
  astatus=''
  getId=0
  ngOnInit(): void {
  
  }
    //get All data from service
    //  accountdataArray=this.serviceCall.getData()
    // console.log(this.accountdataArray);

    updateAccountStatusFunc(id :number,status:string){
      // console.log("update",status);
      
      this.serviceCall.updateAccountStatus(id,status)
      // this.serviceCall.statusChange.emit(status)//Event emiter binding
    }

    update(id:number,name:string,status:string){

      this.checkform=true
      this.aname=name
      this.astatus=status
      this.getId=id
      // this.serviceCall.updateAccountData(id)
      // this.accountdataArray=this.serviceCall.getData()
    }

    updateData(){
      this.serviceCall.updateAccountData(this.getId,this.aname,this.astatus)
      this.checkform=false

    }

    // refreshData = () => {
    //   this.accountdataArray = this.serviceCall.getData();
    //   console.log(this.accountdataArray);
      
    // }
    
}
