import { Component, OnInit } from '@angular/core';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public infoCardStyle: string = "width: 425px; margin: 1em;";

  constructor() { }

  ngOnInit() {
    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [{ key: "Contact", configuration: item => item.selected = true }]
    );
  }

  githubAccess() {
    window.open('https://github.com/milleniu', '_blank');
  }

}
