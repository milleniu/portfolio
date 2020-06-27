import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogPost } from '../../../core/models/blog-post.models';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent implements OnInit {
  @Input() post: BlogPost;

  content: SafeHtml;
  get title(): string { return this.post.title; }
  get coverImage(): string { return this.post.coverImage; }

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const joinedContent = this.post.content.map(c => c.renderHTML()).join('');
    this.content = this.domSanitizer.sanitize(SecurityContext.HTML, joinedContent);
  }
}
