import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid/covid.component';
import { Section1Component } from './covid/section1/section1.component';
import { Section2Component } from './covid/section2/section2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CovidComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    FontAwesomeModule
  ]
})
export class CovidModule { }
