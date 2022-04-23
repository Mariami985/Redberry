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
  },
  {
    path: 'aboutyou',
    loadChildren: () => import('./pages/aboutyou/aboutyou.module').then(item => item.AboutyouModule)
  },
  {
    path:'submit',
    loadChildren:() => import('./pages/submit/submit.module').then(item => item.SubmitModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./pages/thanks/thanks.module').then(item => item.ThanksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
