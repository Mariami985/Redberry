import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutyouRoutingModule } from './aboutyou-routing.module';
import { AboutYouComponent } from './about-you/about-you.component';
import { Section1Component } from './about-you/section1/section1.component';
import { Section2Component } from './about-you/section2/section2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AboutYouComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    CommonModule,
    AboutyouRoutingModule,
    FontAwesomeModule
  ]
})
export class AboutyouModule { }
