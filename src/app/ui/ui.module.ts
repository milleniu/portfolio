import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { CustomIcons, getCustomIconSVG } from './shared/custom-icons/custom-icon-repository';

@NgModule({
  declarations: [
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule
  ],
  exports: [
    NavbarComponent,
    SectionHeaderComponent
  ]
})
export class UiModule {
  constructor(iconService: NzIconService) {
    const customIcons = Object
      .keys(CustomIcons)
      .map(key => CustomIcons[key] as CustomIcons);

    for(const icon of customIcons) {
      iconService.addIconLiteral(icon, getCustomIconSVG(icon));
    }
  }
}
