import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule
  ],
  exports: [
    NavbarComponent,
    SectionHeaderComponent
  ]
})
export class UiModule { }
