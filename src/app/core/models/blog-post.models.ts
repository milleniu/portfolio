import { BlogPostContent } from './blog-post-content.models';


export interface BlogPostRepository {
    getFromRouterLink(routerLink: string): BlogPost|undefined;
    
    getAllTags(): ReadonlyArray<string>;
    getAllCategories(): ReadonlyArray<string>;

    get(count?: number): ReadonlyArray<BlogPost>;
    getWithTags(tags: string | string[]): ReadonlyArray<BlogPost>;
    getInCategory(category: string, count?: number): ReadonlyArray<BlogPost>;
    getInCategoryWithTags(category: string, tags: string | string[]): ReadonlyArray<BlogPost>;
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
