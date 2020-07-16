import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesPageComponent } from './pages/experiences-page/experiences-page.component';
import { UiModule } from '../ui/ui.module';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { ExperiencesTimelineComponent } from './components/experiences-timeline/experiences-timeline.component';
import { NzIconModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [ExperiencesPageComponent, ExperiencesTimelineComponent],
  imports: [
    CommonModule,
    UiModule,
    NzBackTopModule,
    NzTimelineModule,
    NzIconModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
