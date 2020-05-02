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
    
    get(count?: number): ReadonlyArray<BlogPost> {
        return count > 0
            ? this.blogPosts.slice(-Math.min(count, this.blogPosts.length))
            : this.blogPosts;
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
}

export const blogPostRepository = new BlogPostRepository([
    new RedPandaUI(),
    new CSharp(),
    new Angular(),
    new Typescript(),
    new VueJS(),
    new SQL(),
    new Unity()
]);