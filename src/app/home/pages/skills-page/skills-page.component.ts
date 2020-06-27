import { Component, OnInit, Inject } from '@angular/core';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { WellKnownBlogPostCategory } from 'src/data/blog-post-category';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.less']
})
export class SkillsPageComponent implements OnInit {

  public get navigationTargets(): ReadonlyArray<NavbarItem> {
    return getDefaultNavigationTargets();
  }

  public get Category(): typeof WellKnownBlogPostCategory {
    return WellKnownBlogPostCategory;
  }

  constructor(
  ) { }

  ngOnInit() {
    
  }

}
