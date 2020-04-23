import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarItem } from 'src/app/ui/navbar/navbar.component';
import { HeroAreaComponent } from '../../components/hero-area/hero-area.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  @ViewChild(HeroAreaComponent, { read: ElementRef, static: true }) heroAreaComponentRef: ElementRef;
  @ViewChild(AboutComponent, { read: ElementRef, static: true }) aboutComponentRef: ElementRef;
  @ViewChild(SkillsComponent, { read: ElementRef, static: true }) skillsComponentRef: ElementRef;

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
        label: 'Réalisation',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' },
      }
  ]}

  constructor() { }

  ngOnInit() {
  }

}
