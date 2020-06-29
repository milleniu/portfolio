import { InjectionToken } from '@angular/core';
import { BlogPostRepositoryModel, IBlogPostRecommendationsProvider } from '../models/blog-post.models';

export const BLOG_POST_REPOSITORY = new InjectionToken<BlogPostRepositoryModel>( 'BLOG_POST_REPOSITORY' );
export const BLOG_POST_RECOMMENDATIONS = new InjectionToken<IBlogPostRecommendationsProvider>( 'BLOG_POST_RECOMMENDATIONS' );
