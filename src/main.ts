import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { BLOG_POST_REPOSITORY } from './app/core/config/injection-tokens';
import { blogPostRepository } from './data/blog-post-repository';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(
  [
    {
      provide: BLOG_POST_REPOSITORY,
      useValue: blogPostRepository
    }
  ])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
