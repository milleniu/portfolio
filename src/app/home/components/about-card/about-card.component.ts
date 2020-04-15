import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.less']
})
export class AboutCardComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public content: string;

  @Input()
  public icon: string;

  constructor() { }

  ngOnInit() {
  }

}
