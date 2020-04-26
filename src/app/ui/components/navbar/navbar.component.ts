import { Component, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, HostListener } from '@angular/core';

import { NavbarItem } from '../../shared/models/navbar.models';

type SelectableNavbarItem = NavbarItem & { selected: boolean };

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Input() navigationTargets: NavbarItem[];

  public displayMenu: boolean;

  private _highlightedIndex: number;
  navbarItems: SelectableNavbarItem[]

  constructor(
    private ref: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this._highlightedIndex = -1;
    this.navbarItems = this.navigationTargets.map(target => ({ ...target, selected: false }));
    this.displayMenu = false;
  }

  @HostListener( 'window:scroll' )
  updateHighlightedIndex() {
    const offsetY = window.pageYOffset + this.elementRef.nativeElement.offsetHeight;
    const currentHighlightedIndex = this.navigationTargets
      .map((target, i) => ({ viewRef: target.viewRef, i }))
      .filter(({ viewRef }) => viewRef)
      .map(({ viewRef, i }) => ({ offsetTop: viewRef.nativeElement.offsetTop, i }))
      .sort((a, b) => -(a.offsetTop > b.offsetTop))
      .reduce((prev, curr) => prev !== -1 ? prev : curr.offsetTop <= offsetY ? curr.i : prev, -1);
    
    if( currentHighlightedIndex === this._highlightedIndex ) return;

    this._highlightedIndex = currentHighlightedIndex;
    this.navbarItems = this.navigationTargets.map((item, i) => ({ ...item, selected: this._highlightedIndex === i }));

    this.ref.markForCheck();
  }
}
