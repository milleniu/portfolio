import { Component, OnInit, Inject, Input } from '@angular/core';

import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';
import { BlogPostRepository, BlogPost } from 'src/app/core/models/blog-post.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post-list-page',
  templateUrl: './blog-post-list-page.component.html',
  styleUrls: ['./blog-post-list-page.component.less']
})
export class BlogPostListPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public posts: ReadonlyArray<BlogPost>;
  public tags: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository,
  ) {
  }

  ngOnInit() {
    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [ { key: 'Réalisations', configuration: item => item.selected = true } ]
    );

    const queries = this.activatedRoute.snapshot.queryParamMap;
    this.tags = queries.has('tag') && this.getAllTagsFromPosts().includes(queries.get('tag'))
      ? [queries.get('tag')]
      : [];
    this.posts = this.blogPostRepository.getWithTags(this.tags);
  }

  public getAllTagsFromPosts = (): string[] => {
    const set = new Set<string>();
    for (const post of this.blogPostRepository.get())
      for (const tag of post.tags)
        if (!set.has(tag))
          set.add(tag);
    return [...set.values()];
  }

  public tagsChange(tags: string[]) {
    this.tags = tags;
    this.posts = this.blogPostRepository.getWithTags(tags);
  }
}
