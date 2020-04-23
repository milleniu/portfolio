import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogPostRepository } from 'src/app/core/models/blog-post.models';
import { NavbarItem } from 'src/app/ui/navbar/navbar.component';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  public post: BlogPost;

  public get navigationTargets(): NavbarItem[] {
    return [
      {
        label: 'Accueil',
        navigationTarget: { routerLink: '/home', fragment: 'hero' }
      },
      {
        label: 'À Propos',
        navigationTarget: { routerLink: '/home', fragment: 'about' }
      },
      {
        label: 'Compétences',
        navigationTarget: { routerLink: '/home', fragment: 'skills' }
      },
      {
        label: 'Publications',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' }
      }
    ]
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository
  ) { }

  async ngOnInit() {
    const url = this.activatedRoute.snapshot.url;
    const lastSegment = url[url.length - 1];
    this.post = this.blogPostRepository.getFromRouterLink(lastSegment.path);
    if( this.post === undefined )
      throw new Error(`Unable to load post associated with path: ${lastSegment.path}`);
  }

}
