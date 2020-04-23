import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { AboutComponent } from './components/about/about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NzGridModule,
    NzIconModule,
    NzCardModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HeroAreaComponent,
    AboutComponent,
    AboutCardComponent,
    SkillsComponent,
    BlogPostCardComponent,
    BlogPostListComponent
  ]
})
export class HomeModule { }
