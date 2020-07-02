import { BlogPostRepositoryModel, BlogPost, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPosts } from '../blog-posts';

class SimpleBlogPostRepository implements BlogPostRepositoryModel {

    private _tags: string[];
    private _categoriesTags: Map<string, ReadonlyArray<string>>;
    private _categories: BlogPostCategory[];

    constructor(
        private readonly _blogPosts: ReadonlyArray<BlogPost>
    ) {
        const tagsSet = new Set<string>();
        const categoriesTagsSet = new Map<string, Set<string>>();
        const categoriesSet = new Map<string, BlogPostCategory>();

        for (const blogPost of _blogPosts) {
            if(!categoriesTagsSet.has(blogPost.category.path)) {
                categoriesTagsSet.set(blogPost.category.path, new Set<string>());
            }
            const categoryTagsSet = categoriesTagsSet.get(blogPost.category.path);

            for (const tag of blogPost.tags) {
                if (!tagsSet.has(tag))
                    tagsSet.add(tag);
                if (!categoryTagsSet.has(tag))
                    categoryTagsSet.add(tag);
            }

            if (!categoriesSet.has(blogPost.category.path)) {
                categoriesSet.set(blogPost.category.path, blogPost.category);
            }
        }

        this._tags = [...tagsSet.values()];
        this._categories = [...categoriesSet.values()];

        this._categoriesTags = new Map<string, ReadonlyArray<string>>();
        for(const [category, tagsSet] of categoriesTagsSet.entries()) {
            this._categoriesTags.set(category, [...tagsSet.values()])
        }
    }

    getAllTags(category?: BlogPostCategory): ReadonlyArray<string> {
        return !!category
            ? this._categoriesTags.get(category.path)
            : this._tags;
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

    getInCategory(category: BlogPostCategory, count?: number): readonly BlogPost[] {
        return this.sliceArray(this._blogPosts.filter(blogPost => blogPost.category.path === category.path), count);
    }

    getInCategoryWithTags(category: BlogPostCategory, tagFilter: string | string[]): readonly BlogPost[] {
        return this._blogPosts.filter(blogPost => {
            if (blogPost.category.path !== category.path) return false;
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