import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeroAreaComponent } from '../../components/hero-area/hero-area.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { BlogSectionComponent } from '../../components/blog-section/blog-section.component';
import { NavbarItem, NavbarItemViewRefCollection, getDefaultNavigationTarget } from 'src/app/ui/shared/models/navbar.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  @ViewChild(HeroAreaComponent, { read: ElementRef, static: true }) heroAreaComponentRef: ElementRef;
  @ViewChild(AboutSectionComponent, { read: ElementRef, static: true }) aboutComponentRef: ElementRef;
  @ViewChild(SkillsSectionComponent, { read: ElementRef, static: true }) skillsComponentRef: ElementRef;
  @ViewChild(BlogSectionComponent, { read: ElementRef, static: true }) blogSectionComponentRef: ElementRef;

  public get navigationTargets(): NavbarItem[] {
    return getDefaultNavigationTarget({
      'home': this.heroAreaComponentRef,
      'about': this.aboutComponentRef,
      'skills': this.skillsComponentRef,
      'posts': this.blogSectionComponentRef
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
