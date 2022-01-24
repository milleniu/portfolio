import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.less']
})
export class HeroAreaComponent implements OnInit {
  @Input() maintenance: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
