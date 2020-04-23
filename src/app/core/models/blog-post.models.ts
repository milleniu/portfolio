import { BlogPostContent } from './blog-post-content.models';

export type BlogPostRepository = { [routerLink: string]: BlogPostModel };

export interface BlogPostModel extends BlogPostCard, BlogPostView {
    readonly tags: string[];
}

export interface BlogPostCard {
    readonly title: string;
    readonly coverImage: string;
}

export interface BlogPostView {
    readonly title: string;
    readonly coverImage: string;
    readonly content: ReadonlyArray<BlogPostContent>;
}
