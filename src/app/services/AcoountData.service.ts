import { EventEmitter, Injectable } from "@angular/core"
import { LoggingService } from "./LoggingService.service"

// @Injectable()
 @Injectable({ providedIn: "root" })
export class  AccountDataService {
    accounts: Array<AccountDataModel> = [];
    // accounts=[
    //     {
    //         accountName:'Master Account',
    //         accountStatus:'Active'
    //     },
    //     {
    //         accountName:'Test Account',
    //         accountStatus:'InActive'
    //     },
    //     {
    //         accountName:'Hidden Account',
    //         accountStatus:'Unknown'
    //     },

    // ]
    

    constructor(private logServiceCall: LoggingService){
        this.accounts.push(...[new AccountDataModel({
            accountId: 1,
            accountName:'Master Account',
            accountStatus:'Active'
        }),
        new AccountDataModel({
            accountId: 2,
            accountName:'Master Account',
            accountStatus:'Active'
        }),
        new AccountDataModel({
            accountId: 3,
            accountName:'Master Account',
            accountStatus:'Active'
        })])
    }

    addAccount(data: AccountDataModel)
    {
        this.accounts.push(data)
        console.log("data aded",this.accounts);
        

    }

    getData(){
        return this.accounts
    }
    
    updateAccountStatus(id:number, status:string){
        const data = this.accounts.find(f => f.accountId === id);
        if (data != null && data != undefined) {
            data!.accountStatus = status;
        }
        // this.accounts[id].accountStatus=status
        this.logServiceCall.logService(status)

    }

    statusChange=new EventEmitter<string>()

    updateAccountData(id:number,name:string,status:string){

        const data={accountId:id,accountName:name,accountStatus:status}
        console.log("ary",this.accounts);
        console.log(id);
        console.log("update before",this.accounts);

        this.accounts.splice(id,1)
        
        this.accounts.splice(id,0,data)
        console.log("update after",this.accounts);
        
                
        // const index=this.accounts.findIndex(ele=>{
        //     ele.accountName===name && ele.accountStatus===status

        //     console.log("index",index);
            
        // })


    }
}

export class AccountDataModel {
    accountId: number | null = null;
    accountName: string | null = null;
    accountStatus: string | null = null;
    constructor(initializer?: Partial<AccountDataModel>) {
		if (!!initializer) { Object.assign(this, initializer); }
	}
}

export class StaticClass {
    static testData: boolean = false;
}
