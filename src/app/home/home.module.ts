import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { AboutComponent } from './components/about/about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroAreaComponent,
    AboutComponent,
    AboutCardComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    NzGridModule,
    NzIconModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
