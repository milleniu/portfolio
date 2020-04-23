import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogPostComponent,
    BlogPageComponent
  ],
  entryComponents: [
    BlogPageComponent
  ]
})
export class BlogModule { }
