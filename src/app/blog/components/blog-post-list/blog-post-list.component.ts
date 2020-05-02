import { Component, OnInit, Input, Inject } from '@angular/core';
import { BlogPost } from 'src/app/core/models/blog-post.models';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.less']
})
export class BlogPostListComponent implements OnInit {

  @Input('posts') public blogPostList: ReadonlyArray<BlogPost>;

  constructor() {}

  ngOnInit() {
  }
}
