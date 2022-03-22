import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/home/home.module').then(item => item.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(item => item.AboutModule)
  },
  {
    path:'skills',
    loadChildren: () => import('./pages/skills/skills.module').then(item => item.SkillsModule)
  },
  {
    path:'covid',
    loadChildren: () => import('./pages/covid/covid.module').then(item => item.CovidModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
