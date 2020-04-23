import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, fr_FR } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { Router, Event, Scroll } from '@angular/router';
import fr from '@angular/common/locales/fr';

import { filter } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    HomeModule,
    BlogModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    router: Router
  ) {
    router
      .events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe(event => {
        if (!event.anchor) return;
        const element = document.getElementById(event.anchor);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  }

}
