import { NgModule, Inject } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { registerDynamicRoutes } from '../core/routes/dynamic-routes';
import { BLOG_POST_REPOSITORY } from '../core/config/injection-tokens';
import { BlogPostRepository } from '../core/models/blog-post.models';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogPostListPageComponent } from './pages/blog-post-list-page/blog-post-list-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'blog',
      component: BlogPostListPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class BlogRoutingModule {
  constructor(
    router: Router,
    @Inject(BLOG_POST_REPOSITORY) blogPostRepository: BlogPostRepository
  ) {
    const getBlogPostRoutes = () => {
      return blogPostRepository
        .getLatest()
        .map<Route>(post => ({ path: `blog/${post.routerLink}`, component: BlogPageComponent }));
    };
    registerDynamicRoutes(router, getBlogPostRoutes);
  }
}
