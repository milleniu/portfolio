import { Component, OnInit, Input, Inject } from '@angular/core';
import { BlogPost, BlogPostRepository } from 'src/app/core/models/blog-post.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.less']
})
export class BlogPostListComponent implements OnInit {

  @Input() maxDisplayCount: number;

  public blogPostList: BlogPost[];

  constructor(
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository
  ) { }

  ngOnInit() {
    this.blogPostList = [ ...this.blogPostRepository.getLatest(this.maxDisplayCount) ];
  }

}
