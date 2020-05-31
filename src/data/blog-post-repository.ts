import { BlogPostRepository as BlogPostRepositoryModel, BlogPost } from 'src/app/core/models/blog-post.models';
import { RedPandaUI } from './projects/red-panda-ui';
import { CSharp } from './technicals/csharp';
import { Angular } from './technicals/angular';
import { Typescript } from './technicals/typescript';
import { Unity } from './technicals/unity';
import { VueJS } from './technicals/vue-js';
import { SQL } from './technicals/sql';

class BlogPostRepository implements BlogPostRepositoryModel {

    constructor(
        private readonly blogPosts: ReadonlyArray<BlogPost>
    ) { }

    getLatest(count?: number): ReadonlyArray<BlogPost> {
        return this.sliceArray(this.blogPosts, count);
    }

    getWithTags(tagFilter: string | string[]): ReadonlyArray<BlogPost> {
        return this.blogPosts.filter(blogPost => {
            if(tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    getFromRouterLink(routerLink: string): BlogPost|undefined {
        const index = this.blogPosts.findIndex(post => post.routerLink === routerLink);
        return ~index ? this.blogPosts[index] : undefined;
    }

    getLatestInCategory(category: Category, count?: number): readonly BlogPost[] {
        return this.sliceArray(this.blogPosts.filter(blogPost => blogPost.category === category), count);
    }

    getWithTagsInCategory(category: Category, tagFilter: string | string[]): readonly BlogPost[] {
        return this.blogPosts.filter(blogPost => {
            if(blogPost.category !== category) return false;
            if(tagFilter.length === 0) return true;

            return tagFilter instanceof Array
                ? tagFilter.every(tag => blogPost.tags.includes(tag))
                : blogPost.tags.includes(tagFilter);
        });
    }

    private sliceArray<T>(array: ReadonlyArray<T>, count?: number) {
        return count > 0 ? array.slice(-Math.min(count, array.length)) : array;
    }
}

export type Category = 'Réalisation' | 'Compétence Technique' | 'Compétence Transversale';

export const blogPostRepository = new BlogPostRepository([
    new RedPandaUI(),
    new CSharp(),
    new Angular(),
    new Typescript(),
    new VueJS(),
    new SQL(),
    new Unity()
]);