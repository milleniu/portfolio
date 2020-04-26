import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { UiModule } from '../ui/ui.module';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NzBackTopModule,
    NzCardModule,
    NzTagModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogPostComponent,
    BlogPostCardComponent,
    BlogPostListComponent,
    BlogPageComponent,
    BlogPostListComponent
  ],
  exports: [
    BlogPostListComponent
  ],
  entryComponents: [
    BlogPageComponent
  ]
})
export class BlogModule { }
