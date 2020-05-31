import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogPostRepository } from 'src/app/core/models/blog-post.models';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public post: BlogPost;
  public get postTitle(): string { return this.post ? this.post.title : ''; }

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository
  ) { }

  async ngOnInit() {
    this.navigationTargets = getDefaultNavigationTargets(
      {},
      [ { key: 'Réalisations', configuration: item => item.selected = true } ]
    );

    const url = this.activatedRoute.snapshot.url;
    const lastSegment = url[url.length - 1];
    this.post = this.blogPostRepository.getFromRouterLink(lastSegment.path);
    if( this.post === undefined )
      throw new Error(`Unable to load post associated with path: ${lastSegment.path}`);
  }
}
