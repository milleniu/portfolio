import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPostRepository } from 'src/app/core/data/blog-post-repository';
import { BlogPostView } from 'src/app/core/models/blog-post.models';
import { NavbarItem } from 'src/app/ui/navbar/navbar.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  public post: BlogPostView;

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
        label: 'Réalisation',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' }
      }
    ]
  }

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const url = this.activatedRoute.snapshot.url;
    const lastSegment = url[url.length - 1];
    this.post = blogPostRepository[lastSegment.path];
  }

}
