import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UiModule } from '../ui/ui.module';
import { ContactRoutingModule } from './contact-routing.module';
import { NzBackTopModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    UiModule,
    NzBackTopModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
