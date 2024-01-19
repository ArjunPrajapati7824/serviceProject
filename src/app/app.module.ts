import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountDataService } from './services/AcoountData.service';
import { LoggingService } from './services/LoggingService.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
      FormsModule,
      BrowserModule
  ],
  providers: [AccountDataService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
