import { Component, OnInit, Input } from '@angular/core';
import { CustomIcons } from 'src/app/ui/shared/custom-icons/custom-icon-repository';
import { Experience, isDiploma, isEmployementExperience } from '../../shared/models/experience.model';

export enum ExperienceType {
  Event,
  Period,
  Start,
  End
}

export type NormalizedExperience = Experience & { type: ExperienceType };

@Component({
  selector: 'app-experiences-timeline',
  templateUrl: './experiences-timeline.component.html',
  styleUrls: ['./experiences-timeline.component.less']
})
export class ExperiencesTimelineComponent implements OnInit {

  @Input() public set experiences(value: ReadonlyArray<Experience>) {
    this.normalizedExperiences = value.map(experience => {
      if (isDiploma(experience)) {
        return { ...experience, type: ExperienceType.Event }
      } else if (isEmployementExperience(experience)) {
        const period = experience.period;
        const type =
          !period.from ? ExperienceType.End :
            !period.to ? ExperienceType.Start :
              ExperienceType.Period;
        return { ...experience, type };
      }
    });
  }

  public normalizedExperiences: ReadonlyArray<NormalizedExperience> = [];

  get CustomIcons(): typeof CustomIcons { return CustomIcons; }
  get ExperienceType(): typeof ExperienceType { return ExperienceType; }

  constructor() { }

  ngOnInit() {
  }

  getExperienceLabel(experience: NormalizedExperience) {
    if (isDiploma(experience)) {
      return experience.name;
    } else if (isEmployementExperience(experience)) {
      return experience.company;
    }
  }
}
