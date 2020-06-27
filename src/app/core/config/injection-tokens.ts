import { InjectionToken } from '@angular/core';
import { BlogPostRepositoryModel } from '../models/blog-post.models';

export const BLOG_POST_REPOSITORY = new InjectionToken<BlogPostRepositoryModel>( 'BLOG_POST_REPOSITORY' );