import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogPostRepositoryModel, IBlogPostRecommendationsProvider } from 'src/app/core/models/blog-post.models';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY, BLOG_POST_RECOMMENDATIONS } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public post: BlogPost;
  public recommendations: ReadonlyArray<BlogPost>;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepositoryModel,
    @Inject(BLOG_POST_RECOMMENDATIONS) private blogPostRecommendations: IBlogPostRecommendationsProvider
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

    this.recommendations = this.blogPostRecommendations.getRecommendations(this.post, 3);
  }
}
