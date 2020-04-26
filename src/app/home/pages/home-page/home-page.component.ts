import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarItem } from 'src/app/ui/navbar/navbar.component';
import { HeroAreaComponent } from '../../components/hero-area/hero-area.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { BlogSectionComponent } from '../../components/blog-section/blog-section.component';

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
    return [
      {
        label: 'Accueil',
        navigationTarget: { routerLink: '/home', fragment: 'hero' },
        viewRef: this.heroAreaComponentRef
      },
      {
        label: 'À Propos',
        navigationTarget: { routerLink: '/home', fragment: 'about' },
        viewRef: this.aboutComponentRef
      },
      {
        label: 'Compétences',
        navigationTarget: { routerLink: '/home', fragment: 'skills' },
        viewRef: this.skillsComponentRef
      },
      {
        label: 'Publications',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' },
        viewRef: this.blogSectionComponentRef
      }
    ];
  }

  constructor() { }

  ngOnInit() {
  }

}
