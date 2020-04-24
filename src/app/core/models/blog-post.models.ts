import { BlogPostContent } from './blog-post-content.models';


export interface BlogPostRepository {
    readonly blogPosts: ReadonlyArray<BlogPost>;

    getLatest(count: number): ReadonlyArray<BlogPost>;
    getFromRouterLink(routerLink: string): BlogPost|undefined;
}

export interface BlogPost {
    readonly title: string;

    readonly coverImage: string;
    readonly description: string;

    readonly content: ReadonlyArray<BlogPostContent>;

    readonly tags: ReadonlyArray<string>;
    readonly routerLink: string;
}
