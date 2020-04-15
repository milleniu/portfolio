import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroAreaComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
