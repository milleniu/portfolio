import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';


const routes: Routes = [
  {
    component: HomePageComponent,
    path: 'home'
  }// ,
  // {
  //   component: SkillsPageComponent,
  //   path: 'skills'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
