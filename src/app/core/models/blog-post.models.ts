import { BlogPostContent } from './blog-post-content.models';


export interface BlogPostRepository {
    get(count?: number): ReadonlyArray<BlogPost>;
    getWithTags(tags: string | string[]): ReadonlyArray<BlogPost>;
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
