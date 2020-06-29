import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { BLOG_POST_REPOSITORY, BLOG_POST_RECOMMENDATIONS } from './app/core/config/injection-tokens';
import { BlogPostRepository } from './data/models/blog-post-repository';
import { BlogPostRecommendationsProvider } from './data/models/blog-post-recommendation-provider';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(
  [
    {
      provide: BLOG_POST_REPOSITORY,
      useValue: BlogPostRepository
    },
    {
      provide: BLOG_POST_RECOMMENDATIONS,
      useValue: BlogPostRecommendationsProvider
    }
  ])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
