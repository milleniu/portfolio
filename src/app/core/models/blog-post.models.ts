import { BlogPostContent } from './blog-post-content.models';

export interface BlogPostCategory {
    readonly label: string;
    readonly path: string;
}

export interface BlogPost {
    readonly blogPostId: number;

    readonly title: string;
    readonly category: BlogPostCategory;

    readonly coverImage: string;
    readonly description: string;

    readonly content: ReadonlyArray<BlogPostContent>;

    readonly tags: ReadonlyArray<string>;
    readonly routerLink: string;
}

export interface BlogPostRepositoryModel {
    getFromRouterLink(routerLink: string): BlogPost|undefined;
    
    getAllTags(): ReadonlyArray<string>;
    getAllCategories(): ReadonlyArray<BlogPostCategory>;

    get(count?: number): ReadonlyArray<BlogPost>;
    getWithTags(tags: string | string[]): ReadonlyArray<BlogPost>;
    getInCategory(category: string, count?: number): ReadonlyArray<BlogPost>;
    getInCategoryWithTags(category: string, tags: string | string[]): ReadonlyArray<BlogPost>;

    getCategoryFromPath(path: string): BlogPostCategory;
}

export interface IBlogPostRecommendationsProvider {
    getRecommendations(subject: BlogPost, count: number): ReadonlyArray<BlogPost>;
}
