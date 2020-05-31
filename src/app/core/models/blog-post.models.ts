import { BlogPostContent } from './blog-post-content.models';


export interface BlogPostRepository {
    getLatest(count?: number): ReadonlyArray<BlogPost>;
    getWithTags(tags: string | string[]): ReadonlyArray<BlogPost>;
    getFromRouterLink(routerLink: string): BlogPost|undefined;
    
    getLatestInCategory(category: string, count?: number): ReadonlyArray<BlogPost>;
    getWithTagsInCategory(category: string, tags: string | string[]): ReadonlyArray<BlogPost>;
}

export interface BlogPost {
    readonly title: string;
    readonly category: string;

    readonly coverImage: string;
    readonly description: string;

    readonly content: ReadonlyArray<BlogPostContent>;

    readonly tags: ReadonlyArray<string>;
    readonly routerLink: string;
}
