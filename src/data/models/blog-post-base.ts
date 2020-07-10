import { BlogPost, BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent } from 'src/app/core/models/blog-post-content.models';
import { WellKnownTags } from '../blog-post-tags';

export abstract class BlogPostBase implements BlogPost {

    private static BlogPostIdCouter = 0;

    public readonly blogPostId: number;

    constructor() {
        this.blogPostId = ++BlogPostBase.BlogPostIdCouter;
    }

    //#region BlogPost implementation
    public abstract title: string;
    public abstract category: BlogPostCategory;
    public abstract coverImage: string;
    public abstract description: string;
    public abstract content: ReadonlyArray<BlogPostContent>;
    public abstract tags: ReadonlyArray<WellKnownTags>;
    public abstract routerLink: string;
    //#endregion
}
