import { InjectionToken } from '@angular/core';
import { BlogPostRepository } from '../models/blog-post.models';

export const BLOG_POST_REPOSITORY = new InjectionToken<BlogPostRepository>( 'BLOG_POST_REPOSITORY' );