import { IBlogPostRecommendationsProvider, BlogPost } from "src/app/core/models/blog-post.models";
import { BlogPosts } from '../blog-posts';

class TagBasedRecommendations implements IBlogPostRecommendationsProvider {

    constructor(
        private readonly _references: ReadonlyArray<BlogPost>
    ) { }

    getRecommendations(subject: BlogPost, count: number): ReadonlyArray<BlogPost> {
        if( !subject ) throw new Error('subject must be a valid blog post');
        if( count < 1 ) return [];

        return this._references
            .filter(reference => reference.blogPostId !== subject.blogPostId)
            .map(reference => {
                const weight = reference.tags
                    .filter(tag => subject.tags.includes(tag))
                    .length;
                return { reference, weight };
            })
            .sort((a, b) => b.weight - a.weight)
            .slice(0, count)
            .map(tuple => tuple.reference);
    }

}

export const BlogPostRecommendationsProvider = new TagBasedRecommendations(BlogPosts);