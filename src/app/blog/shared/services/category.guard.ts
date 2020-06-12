import { Injectable, Inject } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { BlogPostRepository } from 'src/app/core/models/blog-post.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class CategoryGuard implements CanActivate, CanActivateChild {
  constructor(
    @Inject(BLOG_POST_REPOSITORY) private readonly blogPostRepository: BlogPostRepository
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.blogPostRepository
      .getAllCategories()
      .includes(next.paramMap.get('category'));
  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }

}
