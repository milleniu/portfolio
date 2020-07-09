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
  public content: string|string[];

  @Input()
  public icon: string;

  public get normalizedContents(): string[] {
    return this.content instanceof Array
      ? this.content
      : [ this.content ];
  }

  constructor() { }

  ngOnInit() {
  }

}
