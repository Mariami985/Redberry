import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponentsComponent } from './skills-components/skills-components.component';

const routes: Routes = [
 {
   path: '',
   component: SkillsComponentsComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
