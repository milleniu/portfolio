import { Component, OnInit, Input } from '@angular/core';
import { CustomIcons } from 'src/app/ui/shared/custom-icons/custom-icon-repository';
import { Experience, isDiploma, isEmployementExperience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experiences-timeline',
  templateUrl: './experiences-timeline.component.html',
  styleUrls: ['./experiences-timeline.component.less']
})
export class ExperiencesTimelineComponent implements OnInit {

  @Input() public experiences: ReadonlyArray<Experience>;

  get CustomIcons(): typeof CustomIcons { return CustomIcons; }

  constructor() { }

  ngOnInit() {
  }

  getExperienceHeader(experience: Experience): string {
    if (isDiploma(experience)) {
      return experience.name;
    } else if (isEmployementExperience(experience)) {
      return experience.company;
    } else {
      return '';
    }
  }

  getAdditionalExperienceHeader(experience: Experience): string {
    if (isEmployementExperience(experience)) {
      return ` - ${experience.position}`;
    } else {
      return '';
    }
  }

  getExperienceDate(experience: Experience): string {
    const formatPeriod = ({from, to}: { from: number, to?: number }): string => {
      return `(${from}${to ? `- ${to}` : ''})`;
    }

    if (isDiploma(experience)) {
      return `(${experience.date})`;
    } else if (isEmployementExperience(experience)) {
      return formatPeriod(experience.period);
    } else {
      return '';
    }
  }

  getExperienceDetails(experience: Experience): ReadonlyArray<string> {
    if (isDiploma(experience)) {
      return [ experience.school ];
    } else if (isEmployementExperience(experience)) {
      return experience.role;
    } else {
      return [];
    }
  }

  isDiploma(experience: Experience): boolean {
    return isDiploma(experience);
  }
}
