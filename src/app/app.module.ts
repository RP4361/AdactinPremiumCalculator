import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserpremiumModule} from '../module/userpremium/userpremium.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserpremiumModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
