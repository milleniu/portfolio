import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/core/models/blog-post.models';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.less']
})
export class BlogPostCardComponent implements OnInit {
  @Input() post: BlogPost;

  get title(): string { return this.post.title };
  get coverImage(): string { return this.post.coverImage };
  get description(): string { return this.post.description };
  get routerLink(): string { return `/blog/${this.post.routerLink}` };

  constructor() { }

  ngOnInit() {
  }

}
