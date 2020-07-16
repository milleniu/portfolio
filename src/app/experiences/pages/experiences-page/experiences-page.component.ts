import { Component, OnInit } from '@angular/core';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { Experience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.less']
})
export class ExperiencesPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;

  public readonly experiences: ReadonlyArray<Experience> = [
    { company: 'Signature-Code', position: 'CDI', role: ['Développeur Full-Stack .NET', 'Chef de Projet', 'Tech Lead'], period: { from: 2020 } },
    { name: 'Titre d\'expert en Ingénierie du Logiciel, certifié RNCP au niveau 1', school: 'IN\'TECH', date: 2020 },
    { company: 'Signature-Code', position: 'Alternant', role: ['Développeur Full-Stack .NET', 'Chef de Projet', 'Tech Lead'], period: { from: 2018, to: 2020 } },
    { name: 'Bachelor informatique', school: 'IN\'TECH', date: 2018 },
    { company: 'Invenietis', position: 'Stagiaire (deux stages de 6 mois)', role: ['Développeur Full-Stack .NET'], period: { from: 2016, to: 2018 } },
    { company: 'IN\'TECH', position: 'Intégration en 4ème semestre', role: ['Ingénierie Logicielle'], period: { from: 2016 } },
    { company: 'EFREI', position: 'Classe Préparatoire Intégrée', role: ['École d\'ingénieur généraliste en informatique et technologies du numérique'], period: { from: 2013, to: 2016 } },
    { name: 'BAC S - Spécialité ISN', school: 'Evariste Galois Sartrouville', date: 2013 },
  ]

  constructor() { }

  ngOnInit() {
    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [{ key: 'Mon Parcours', configuration: item => item.selected = true }]
    );
  }

}
