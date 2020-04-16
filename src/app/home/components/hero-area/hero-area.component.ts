import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.less']
})
export class HeroAreaComponent implements OnInit {

  @Input()
  scrollTarget: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    if (!this.scrollTarget) return;
    this.scrollTarget.scrollIntoView({ behavior: 'smooth' });
  }
}
