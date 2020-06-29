import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/core/models/blog-post.models';

@Component({
  selector: 'app-blog-breadcrumb',
  templateUrl: './blog-breadcrumb.component.html',
  styleUrls: ['./blog-breadcrumb.component.less']
})
export class BlogBreadcrumbComponent implements OnInit {

  @Input() post: BlogPost = undefined;

  constructor() { }

  ngOnInit() {
  }

}
