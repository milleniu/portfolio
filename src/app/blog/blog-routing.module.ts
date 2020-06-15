import { NgModule, Inject } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { registerDynamicRoutes } from '../core/routes/dynamic-routes';
import { BLOG_POST_REPOSITORY } from '../core/config/injection-tokens';
import { BlogPostRepositoryModel } from '../core/models/blog-post.models';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogPostListPageComponent } from './pages/blog-post-list-page/blog-post-list-page.component';
import { CategoryGuard } from './shared/services/category.guard';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'blog/:category',
      component: BlogPostListPageComponent,
      canActivate: [ CategoryGuard ]
    }
  ])],
  exports: [RouterModule]
})
export class BlogRoutingModule {
  constructor(
    router: Router,
    @Inject(BLOG_POST_REPOSITORY) blogPostRepository: BlogPostRepositoryModel
  ) {
    const getBlogPostRoutes = () => {
      return blogPostRepository
        .get()
        .map<Route>(post => ({ path: `blog/${post.routerLink}`, component: BlogPageComponent }));
    };
    registerDynamicRoutes(router, getBlogPostRoutes);
  }
}
