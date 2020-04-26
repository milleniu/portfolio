import { BlogPostRepository as BlogPostRepositoryModel, BlogPost } from 'src/app/core/models/blog-post.models';
import { RedPandaUI } from './projects/red-panda-ui';

class BlogPostRepository implements BlogPostRepositoryModel {

    constructor(
        public readonly blogPosts: ReadonlyArray<BlogPost>
    ) { }
    
    getLatest(count: number): ReadonlyArray<BlogPost> {
        return this.blogPosts.slice(-Math.max(count, this.blogPosts.length));
    }
    
    getFromRouterLink(routerLink: string): BlogPost|undefined {
        const index = this.blogPosts.findIndex(post => post.routerLink === routerLink);
        return ~index ? this.blogPosts[index] : undefined;
    }
}

export const blogPostRepository = new BlogPostRepository([
    new RedPandaUI()
]);