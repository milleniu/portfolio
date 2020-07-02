import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NavbarItem, getDefaultNavigationTargets, NavbarItemConfiguration, NavbarItemLabelUnion } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';
import { BlogPostRepositoryModel, BlogPost, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, of } from 'rxjs';
import { switchMap, withLatestFrom, takeUntil } from 'rxjs/operators';
import { WellKnownBlogPostCategory, BlogPostCategoryStyling } from 'src/data/blog-post-category';

@Component({
  selector: 'app-blog-post-list-page',
  templateUrl: './blog-post-list-page.component.html',
  styleUrls: ['./blog-post-list-page.component.less']
})
export class BlogPostListPageComponent implements OnInit, OnDestroy {

  private _onDestroy: Subject<void>;

  public category: BlogPostCategory;
  public navigationTargets: ReadonlyArray<NavbarItem>;
  public posts: ReadonlyArray<BlogPost>;
  public allTags: ReadonlyArray<string>;
  public tags: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepositoryModel,
  ) {
  }

  public ngOnInit() {
    this._onDestroy = new Subject();

    const url = this.activatedRoute.snapshot.url;
    const lastSegment = url[url.length - 1];
    this.category = this.blogPostRepository.getCategoryFromPath(lastSegment.path);
    if( this.category === undefined )
      throw new Error(`Unable to find category associated with path: ${lastSegment.path}`);

    this.navigationTargets = getDefaultNavigationTargets(
      {},
      (Object.values(WellKnownBlogPostCategory) as BlogPostCategory[])
        .map<NavbarItemConfiguration>(category => ({
          key: category.label as unknown as NavbarItemLabelUnion,
          configuration: (item) => item.selected = category.path === this.category.path
        }))
        .concat(
          (Object.values(BlogPostCategoryStyling) as BlogPostCategory[])
            .map<NavbarItemConfiguration>(category => ({
              key: category.label as unknown as NavbarItemLabelUnion,
              configuration: (item) => item.selected = category.path === this.category.path,
              accept: (_) => category.path === lastSegment.path
            }))
        )
    );

    this.posts = [];
    this.allTags = this.blogPostRepository.getAllTags(this.category);
    this.tags = []

    const tagQuery$ = this.activatedRoute.queryParamMap
      .pipe(
        takeUntil(this._onDestroy),
        switchMap((queries: ParamMap) => {
          const queryTag = queries.get('tag');
          return of(!!queryTag && this.allTags.includes(queryTag) ? queryTag : null);
        })
      );

    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this._onDestroy),
        withLatestFrom(tagQuery$),
        switchMap(([params, tag]: [ParamMap, string]) => {
          const categoryPath = params.get('category');
          this.category = this.blogPostRepository.getCategoryFromPath(categoryPath);
          if( this.category === undefined )
            throw new Error(`Unable to find category associated with path: ${categoryPath}`);
          this.allTags = this.blogPostRepository.getAllTags(this.category);
          this.tags = !!tag ? [tag] : [];
          return of(this.blogPostRepository.getInCategoryWithTags(this.category, this.tags));
        }))
      .subscribe(posts => this.posts = posts);
  }

  public tagsChange(tags: string[]) {
    this.tags = tags;
    this.posts = this.blogPostRepository.getInCategoryWithTags(this.category, this.tags);
  }

  public ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
