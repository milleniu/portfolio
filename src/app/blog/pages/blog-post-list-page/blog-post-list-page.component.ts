import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';

import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';
import { BlogPostRepository, BlogPost } from 'src/app/core/models/blog-post.models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, withLatestFrom, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-list-page',
  templateUrl: './blog-post-list-page.component.html',
  styleUrls: ['./blog-post-list-page.component.less']
})
export class BlogPostListPageComponent implements OnInit, OnDestroy {

  private _category: string;
  private _onDestroy: Subject<void>;

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public posts: ReadonlyArray<BlogPost>;
  public tags: string[];

  public get allTags(): ReadonlyArray<string> {
    return this.blogPostRepository.getAllTags();
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository,
  ) {
  }

  ngOnInit() {
    this._onDestroy = new Subject();

    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [ { key: 'Réalisations', configuration: item => item.selected = true } ]
    );
    this.posts = [];
    this.tags= []

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
          this._category = params.get('category');
          this.tags = !!tag ? [ tag ] : [];
          return of(this.blogPostRepository.getInCategoryWithTags(this._category, this.tags));
        }))
      .subscribe(posts => this.posts = posts);
  }

  public tagsChange(tags: string[]) {
    this.tags = tags;
    this.posts = this.blogPostRepository.getInCategoryWithTags(this._category, this.tags);
  }

  public ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
