import { BlogPostRepository as BlogPostRepositoryModel, BlogPost } from 'src/app/core/models/blog-post.models';
import { RedPandaUI } from './projects/red-panda-ui';
import { CSharp } from './technicals/csharp';
import { Angular } from './technicals/angular';
import { Typescript } from './technicals/typescript';
import { Unity } from './technicals/unity';
import { VueJS } from './technicals/vue-js';
import { SQL } from './technicals/sql';

class BlogPostRepository implements BlogPostRepositoryModel {

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

            if (!categoriesSet.has(blogPost.category))
                categoriesSet.add(blogPost.category);
        }

        this._tags = [...tagSet.values()];
        this._categories = [ ...categoriesSet.values()];
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

    getInCategory(category: Category, count?: number): readonly BlogPost[] {
        return this.sliceArray(this.blogPosts.filter(blogPost => blogPost.category === category), count);
    }

    getInCategoryWithTags(category: Category, tagFilter: string | string[]): readonly BlogPost[] {
        return this.blogPosts.filter(blogPost => {
            if (blogPost.category !== category) return false;
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

export type Category = 'realization' | 'technical' | 'transversal';

export const blogPostRepository = new BlogPostRepository([
    new RedPandaUI(),
    new CSharp(),
    new Angular(),
    new Typescript(),
    new VueJS(),
    new SQL(),
    new Unity()
]);