import { BlogPostRepositoryModel, BlogPost, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPosts } from '../blog-posts';

class SimpleBlogPostRepository implements BlogPostRepositoryModel {

    private _tags: string[];
    private _categories: string[];

    constructor(
        private readonly blogPosts: ReadonlyArray<BlogPost>
    ) {
        const tagSet = new Set<string>();
        const categoriesSet = new Set<string>();

        for (const blogPost of blogPosts) {
            for (const tag of blogPost.tags) {
                if (!tagSet.has(tag))
                    tagSet.add(tag);
            }

            if (blogPost.category.path instanceof Array) {
                for (const path of blogPost.category.path) {
                    if (!categoriesSet.has(path)) {
                        categoriesSet.add(path);
                    }
                }
            } else {
                const path = blogPost.category.path as string;
                if (!categoriesSet.has(path)) {
                    categoriesSet.add(path);
                }
            }
        }

        this._tags = [...tagSet.values()];
        this._categories = [...categoriesSet.values()];
    }

    getAllTags(): ReadonlyArray<string> {
        return this._tags;
    }

    getAllCategories(): ReadonlyArray<string> {
        return this._categories;
    }

    get(count?: number): ReadonlyArray<BlogPost> {
        return this.sliceArray(this.blogPosts, count);
    }

    getWithTags(tagFilter: string | string[]): ReadonlyArray<BlogPost> {
        return this.blogPosts.filter(blogPost => {
            if (tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    getFromRouterLink(routerLink: string): BlogPost | undefined {
        const index = this.blogPosts.findIndex(post => post.routerLink === routerLink);
        return ~index ? this.blogPosts[index] : undefined;
    }

    getInCategory(category: string, count?: number): readonly BlogPost[] {
        return this.sliceArray(this.blogPosts.filter(blogPost => blogPost.category.path === category), count);
    }

    getInCategoryWithTags(category: string, tagFilter: string | string[]): readonly BlogPost[] {
        return this.blogPosts.filter(blogPost => {
            if (blogPost.category.path !== category) return false;
            if (tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    private sliceArray<T>(array: ReadonlyArray<T>, count?: number) {
        return count > 0 ? array.slice(-Math.min(count, array.length)) : array;
    }
}

export const BlogPostRepository = new SimpleBlogPostRepository(BlogPosts);