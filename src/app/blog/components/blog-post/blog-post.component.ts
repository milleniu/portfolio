import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogPostView } from '../../../core/models/blog-post.models';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: BlogPostView;

  innerHTML: SafeHtml;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const joinedContent = this.blogPost.content.map(c => c.renderHTML()).join('\n');
    this.innerHTML = this.domSanitizer.sanitize(SecurityContext.HTML, joinedContent);
  }
}
