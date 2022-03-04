import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponentComponent } from './about-component/about-component.component';
import { Section1Component } from './about-component/section1/section1.component';
import { Section2Component } from './about-component/section2/section2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutComponentComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ]
})
export class AboutModule { }
