import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UiModule } from '../ui/ui.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzBackTopModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
