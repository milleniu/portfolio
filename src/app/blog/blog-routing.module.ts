import { NgModule, Inject } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { registerDynamicRoutes } from '../core/routes/dynamic-routes';
import { BLOG_POST_REPOSITORY } from '../core/config/injection-tokens';
import { BlogPostRepository } from '../core/models/blog-post.models';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule]
})
export class BlogRoutingModule {
  constructor(
    router: Router,
    @Inject(BLOG_POST_REPOSITORY) blogPostRepository: BlogPostRepository
  ) {
    const getBlogPostRoutes = () => {
      return blogPostRepository
        .blogPosts
        .map<Route>(post => ({ path: `blog/${post.routerLink}`, component: BlogPageComponent }));
    }
    registerDynamicRoutes(router, getBlogPostRoutes);
  }
}
