import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { UiModule } from '../ui/ui.module';
import { BlogModule } from '../blog/blog.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NzGridModule,
    NzIconModule,
    BlogModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HeroAreaComponent,
    AboutSectionComponent,
    AboutCardComponent,
    SkillsSectionComponent,
    BlogSectionComponent
  ]
})
export class HomeModule { }
