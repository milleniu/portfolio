import { Component, OnInit } from '@angular/core';
import { CustomIcons } from 'src/app/ui/shared/custom-icons/custom-icon-repository';

type Content = { title: string, content: string|string[], icon: string };

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.less']
})
export class AboutSectionComponent implements OnInit {

  public readonly content: Array<Content> = [
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

  public readonly presentation: Content = {
    title: "Qui-suis je ?",
    content: [
      "Tout petit déjà, j’avais deux passions : la pratique du kayak et le goût des constructions ordonnées, " +
      "rangées et structurées. Si j’ai pu très tôt assouvir ma passion du kayak et me confronter à la haute " +
      "rivière, j’ai du patienter quelques années de plus pour rencontrer l’informatique. La découverte de la " +
      "programmation a été une révélation.",

      "J’aime développer des algorithmes, les peaufiner ou mettre à jour des solutions avancées. Exigent envers " +
      "moi-même, je recherche une finition technique irréprochable.",

      "Après m’être dirigé vers des études classiques, j’ai très vite ressenti le besoin d’exploiter sans attendre " +
      "mes compétences en informatique dans la vie professionnelle et je me suis réorienté vers l’alternance. Ma " +
      "passion du kayak m’a soutenu dans cette évolution : j’y avais appris la remise en question, l’adaptabilité, " +
      "la gestion de crise et le dépassement de soi.",

      "Fort de cette expérience, j’ai choisi d’intégrer l’INTECH, tout en débutant en parallèle en tant que " +
      "stagiaire chez Signature-code, société dans laquelle j’ai depuis évolué de stagiaire à Tech Lead."
    ],
    icon: CustomIcons.Kayak
  }

  constructor() { }

  ngOnInit() {
  }

}
