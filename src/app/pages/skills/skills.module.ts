import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponentsComponent } from './skills-components/skills-components.component';
import { Section1Component } from './skills-components/section1/section1.component';
import { Section2Component } from './skills-components/section2/section2.component';


@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    SkillsComponentsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
