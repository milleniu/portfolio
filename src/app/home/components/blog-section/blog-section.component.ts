import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/core/models/blog-post.models';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.less']
})
export class BlogSectionComponent implements OnInit {

  @Input() public posts: ReadonlyArray<BlogPost>;

  constructor() { }

  ngOnInit() {
  }

}
