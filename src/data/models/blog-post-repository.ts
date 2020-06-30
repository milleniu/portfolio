import { BlogPostRepositoryModel, BlogPost, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPosts } from '../blog-posts';

class SimpleBlogPostRepository implements BlogPostRepositoryModel {

    private _tags: string[];
    private _categories: BlogPostCategory[];

    constructor(
        private readonly _blogPosts: ReadonlyArray<BlogPost>
    ) {
        const tagSet = new Set<string>();
        const categoriesSet = new Map<string, BlogPostCategory>();

        for (const blogPost of _blogPosts) {
            for (const tag of blogPost.tags) {
                if (!tagSet.has(tag))
                    tagSet.add(tag);
            }

            if (!categoriesSet.has(blogPost.category.path)) {
                categoriesSet.set(blogPost.category.path, blogPost.category);
            }
        }

        this._tags = [...tagSet.values()];
        this._categories = [...categoriesSet.values()];
    }

    getAllTags(): ReadonlyArray<string> {
        return this._tags;
    }

    getAllCategories(): ReadonlyArray<BlogPostCategory> {
        return this._categories;
    }

    get(count?: number): ReadonlyArray<BlogPost> {
        return this.sliceArray(this._blogPosts, count);
    }

    getWithTags(tagFilter: string | string[]): ReadonlyArray<BlogPost> {
        return this._blogPosts.filter(blogPost => {
            if (tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    getFromRouterLink(routerLink: string): BlogPost | undefined {
        const index = this._blogPosts.findIndex(post => post.routerLink === routerLink);
        return ~index ? this._blogPosts[index] : undefined;
    }

    getInCategory(category: string, count?: number): readonly BlogPost[] {
        return this.sliceArray(this._blogPosts.filter(blogPost => blogPost.category.path === category), count);
    }

    getInCategoryWithTags(category: string, tagFilter: string | string[]): readonly BlogPost[] {
        return this._blogPosts.filter(blogPost => {
            if (blogPost.category.path !== category) return false;
            if (tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    getCategoryFromPath(path: string): BlogPostCategory {
        const categories = this._categories.filter(category => category.path === path);
        return !!categories.length ? categories[0] : undefined;
    }

    private sliceArray<T>(array: ReadonlyArray<T>, count?: number) {
        return count > 0 ? array.slice(-Math.min(count, array.length)) : array;
    }
}

export const BlogPostRepository = new SimpleBlogPostRepository(BlogPosts);