import { Component, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, HostListener, HostBinding, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { NavbarItem, SelectableNavbarItem } from '../../shared/models/navbar.models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() navigationTargets: ReadonlyArray<NavbarItem>;

  @ViewChild('navigation', { static: true }) navigationElement: ElementRef;

  public displayMenu: boolean;

  private _highlightedIndex: [number, number];
  public navbarItems: SelectableNavbarItem[]

  private _resizeObserver: { observe: (elementRef: any) => void; disconnect: () => void; };
  private _updateHighlightedIndex$: Subject<void>;

  constructor(
    private readonly ref: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this._highlightedIndex = [-1, -1];
    this.navbarItems = this.navigationTargets.map(target => ({ ...target, selected: false }));
    this.displayMenu = false;

    this._updateHighlightedIndex$ = new Subject<void>();
    this._updateHighlightedIndex$.pipe(debounceTime(100)).subscribe(() => this.updateHighlightedIndex());

    if (window['ResizeObserver']) {
      this._resizeObserver = new window['ResizeObserver'](() => { this._updateHighlightedIndex$.next(); });
      this._resizeObserver.observe(this.elementRef.nativeElement);
    }
  }

  @HostListener('window:scroll')
  scrollListener() {
    this._updateHighlightedIndex$.next();
  }

  updateHighlightedIndex() {
    const offsetY = window.pageYOffset + this.elementRef.nativeElement.offsetHeight;
    const findIndex = (targets: ReadonlyArray<NavbarItem>) => targets
      .map((target, i) => ({ viewRef: target.viewRef, i }))
      .filter(({ viewRef }) => viewRef)
      .map(({ viewRef, i }) => ({ offsetTop: viewRef.nativeElement.offsetTop, i }))
      .sort((a, b) => -(a.offsetTop > b.offsetTop))
      .reduce((prev, curr) => prev !== -1 ? prev : curr.offsetTop <= offsetY ? curr.i : prev, -1);

    const highlightIndex = findIndex(this.navigationTargets);
    const highlightChildIndex = highlightIndex !== -1 && !!this.navigationTargets[highlightIndex].children
      ? findIndex(this.navigationTargets[highlightIndex].children)
      : -1;

    let viewUpdateRequired = this._highlightedIndex[0] !== highlightIndex
      || this._highlightedIndex[1] !== highlightChildIndex;

    this._highlightedIndex = [highlightIndex, highlightChildIndex];
    this.navbarItems = this.navigationTargets.map((navigationTarget, i) => {
      const result = {
        ...navigationTarget,
        selected: highlightIndex === i,
      };

      if (!!result.children) {
        result.children = result.children.map((child, j) => {
          const childResult = { ...child, selected: highlightIndex === i && highlightChildIndex === j };
          if (!!childResult.configuration) {
            childResult.configuration(childResult);
            viewUpdateRequired = true;
          }
          return childResult;
        });
      }

      if (!!result.configuration) {
        result.configuration(result);
        viewUpdateRequired = true;
      }

      return result;
    });

    if(viewUpdateRequired) this.ref.markForCheck();
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: Event) {
    if (!(this.displayMenu && event.target)) return;

    const clickedInside = this.navigationElement.nativeElement.contains(event.target);
    if (clickedInside) return;

    this.displayMenu = false;
  }

  ngAfterViewInit() {
    this.updateHighlightedIndex();
  }

  ngOnDestroy() {
    if (!!this._resizeObserver) this._resizeObserver.disconnect();
    if (!!this._updateHighlightedIndex$) this._updateHighlightedIndex$.complete();
  }
}
