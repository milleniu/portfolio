import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  public readonly content: Array<{ title: string, content: string, icon: string }> = [
    {
      title: "Passionné",
      content: "Tombé dans le monde de la programmation à l'âge de 14 ans, je n'ai pas encore fini d'expérimenter et de me confronter à de nouvelles problématiques.",
      icon: "experiment"
    },
    {
      title: "Formation",
      content: "Option ISN au baccalauréat. Enseignement théorique à l'EFREI et validation d'un diplôme d'expert en ingénieurie logicielle à INTECH'INFO.",
      icon: "read"
    },
    {
      title: "Emploi",
      content: "Développeur full stack .NET chez Signature-Code. Problématiques liées au monde des GIS et participation à l'enrichissement du tooling de l'entreprise.",
      icon: "laptop"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
