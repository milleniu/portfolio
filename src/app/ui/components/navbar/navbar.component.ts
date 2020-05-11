import { Component, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, HostListener, HostBinding, OnDestroy } from '@angular/core';

import { NavbarItem } from '../../shared/models/navbar.models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

type SelectableNavbarItem = NavbarItem & { selected: boolean };

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() navigationTargets: NavbarItem[];

  public displayMenu: boolean;

  private _highlightedIndex: number;
  public navbarItems: SelectableNavbarItem[]

  private _resizeObserver: { observe: (elementRef: any) => void; disconnect: () => void; };
  private _updateHighlightedIndex$: Subject<void>;

  constructor(
    private readonly ref: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this._highlightedIndex = -1;
    this.navbarItems = this.navigationTargets.map(target => ({ ...target, selected: false }));
    this.displayMenu = false;

    if (window['ResizeObserver']) {
      this._updateHighlightedIndex$ = new Subject<void>();
      this._updateHighlightedIndex$.pipe(debounceTime(100)).subscribe(() => this.updateHighlightedIndex);

      this._resizeObserver = new window['ResizeObserver'](() => { this._updateHighlightedIndex$.next(); });
      this._resizeObserver.observe(this.elementRef.nativeElement);
    }
  }

  @HostListener('window:scroll')
  updateHighlightedIndex() {
    const offsetY = window.pageYOffset + this.elementRef.nativeElement.offsetHeight;
    const currentHighlightedIndex = this.navigationTargets
      .map((target, i) => ({ viewRef: target.viewRef, i }))
      .filter(({ viewRef }) => viewRef)
      .map(({ viewRef, i }) => ({ offsetTop: viewRef.nativeElement.offsetTop, i }))
      .sort((a, b) => -(a.offsetTop > b.offsetTop))
      .reduce((prev, curr) => prev !== -1 ? prev : curr.offsetTop <= offsetY ? curr.i : prev, -1);

    if (currentHighlightedIndex === this._highlightedIndex) return;

    this._highlightedIndex = currentHighlightedIndex;
    this.navbarItems = this.navigationTargets.map((item, i) => ({ ...item, selected: this._highlightedIndex === i }));

    this.ref.markForCheck();
  }

  ngOnDestroy() {
    if (!!this._resizeObserver) this._resizeObserver.disconnect();
    if (!!this._updateHighlightedIndex$) this._updateHighlightedIndex$.complete();
  }
}
