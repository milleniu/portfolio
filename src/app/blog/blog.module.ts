import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogRoutingModule } from './blog-routing.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
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
