import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpremiumComponent } from './userpremium/userpremium.component';
import { Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', component: UserpremiumComponent },
];

@NgModule({
  declarations: [
    UserpremiumComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSliderModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class UserpremiumModule { }
