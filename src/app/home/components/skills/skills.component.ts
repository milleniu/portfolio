import { Component, OnInit } from '@angular/core';

type WeightedWord = { word: string, weight: number };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  readonly words: WeightedWord[] = [
    { word: 'Vue.js', weight: 1.4 },
    { word: 'SQL', weight: 1.2 },
    { word: 'Typescript', weight: 1.8 },
    { word: 'C#', weight: 1.8 },
    { word: 'Algorithmie', weight: 1.8 },
    { word: 'Angular', weight: 1.4 },
    { word: 'SIG', weight: 1.6 },
    { word: 'Unity', weight: 1.3 },
  ];

  constructor() { }

  ngOnInit() {
  }

}