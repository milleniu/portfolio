import { Component, OnInit } from '@angular/core';

import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';

@Component({
  selector: 'app-blog-post-list-page',
  templateUrl: './blog-post-list-page.component.html',
  styleUrls: ['./blog-post-list-page.component.less']
})
export class BlogPostListPageComponent implements OnInit {

  public get navigationTargets(): NavbarItem[] {
    return getDefaultNavigationTargets();
  }

  constructor() { }

  ngOnInit() {
  }

}
