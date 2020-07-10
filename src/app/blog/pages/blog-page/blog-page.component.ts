import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogPostRepositoryModel, IBlogPostRecommendationsProvider, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { NavbarItem, getDefaultNavigationTargets, NavbarItemLabelUnion, NavbarItemConfiguration } from 'src/app/ui/shared/models/navbar.models';
import { BLOG_POST_REPOSITORY, BLOG_POST_RECOMMENDATIONS } from 'src/app/core/config/injection-tokens';
import { WellKnownBlogPostCategory, BlogPostCategoryStyling } from 'src/data/blog-post-category';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  public navigationTargets: ReadonlyArray<NavbarItem>;
  public post: BlogPost;
  public recommendations: ReadonlyArray<BlogPost>;
  public recommendationsLabel: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepositoryModel,
    @Inject(BLOG_POST_RECOMMENDATIONS) private blogPostRecommendations: IBlogPostRecommendationsProvider
  ) { }

  async ngOnInit() {
    const url = this.activatedRoute.snapshot.url;
    const postSegment = url[url.length - 1];

    this.post = this.blogPostRepository.getFromRouterLink(postSegment.path);
    if( this.post === undefined )
      throw new Error(`Unable to load post associated with path: ${postSegment.path}`);

    this.navigationTargets = getDefaultNavigationTargets(
      {},
      (Object.values(WellKnownBlogPostCategory) as BlogPostCategory[])
        .map<NavbarItemConfiguration>(category => ({
          key: category.label as unknown as NavbarItemLabelUnion,
          configuration: (item) => item.selected = category.path === this.post.category.path
        }))
        .concat(
          (Object.values(BlogPostCategoryStyling) as BlogPostCategory[])
            .map<NavbarItemConfiguration>(category => ({
              key: category.label as unknown as NavbarItemLabelUnion,
              configuration: (item) => item.selected = category.path === this.post.category.path,
              accept: (_) => category.path === this.post.category.path
            }))
        )
    );

    this.recommendationsLabel = this.post.category === WellKnownBlogPostCategory.Realization
      ? 'Compétences associées :'
      : 'Réalisations associées :';
    this.recommendations = this.blogPostRecommendations.getRecommendations(this.post, 10);
  }
}
