import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesPageComponent } from './pages/experiences-page/experiences-page.component';
import { UiModule } from '../ui/ui.module';
import { NzBackTopModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [ExperiencesPageComponent],
  imports: [
    CommonModule,
    UiModule,
    NzBackTopModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
