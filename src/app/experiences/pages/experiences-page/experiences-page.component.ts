import { Component, OnInit } from '@angular/core';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';

@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.less']
})
export class ExperiencesPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;

  constructor() { }

  ngOnInit() {
    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [{ key: 'Mon Parcours', configuration: item => item.selected = true }]
    );
  }

}
