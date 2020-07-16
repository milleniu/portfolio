import { Component, OnInit } from '@angular/core';

type WeightedWord = { word: string, weight: number };

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.less']
})
export class SkillsSectionComponent implements OnInit {

  readonly words: WeightedWord[] = [
    { word: 'Vue.js', weight: 1.4 },
    { word: 'SQL', weight: 1.2 },
    { word: 'TypeScript', weight: 1.8 },
    { word: 'C#', weight: 1.8 },
    { word: 'Algorithmique', weight: 1.8 },
    { word: 'Angular', weight: 1.4 },
    { word: 'SIG', weight: 1.6 },
    { word: 'Unity', weight: 1.3 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
