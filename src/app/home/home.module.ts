import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroAreaComponent,
    AboutCardComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    NzIconModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
