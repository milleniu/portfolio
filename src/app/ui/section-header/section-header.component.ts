import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.less']
})
export class SectionHeaderComponent implements OnInit {

  @Input()
  public sectionName: string;

  public get firstPart(): string {
    return (this.sectionName && this.sectionName.split(' ')[0]) || '';
  }

  public get secondPart(): string {
    return (this.sectionName && this.sectionName.slice(this.firstPart.length)) || '';
  }

  constructor() { }

  ngOnInit() {
  }

}
