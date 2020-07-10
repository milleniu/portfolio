import { IBlogPostRecommendationsProvider, BlogPost } from "src/app/core/models/blog-post.models";
import { BlogPosts } from '../blog-posts';
import { WellKnownBlogPostCategory } from '../blog-post-category';

class TagBasedRecommendations implements IBlogPostRecommendationsProvider {

  constructor(
    private readonly _references: ReadonlyArray<BlogPost>
  ) { }

  getRecommendations(subject: BlogPost, count: number): ReadonlyArray<BlogPost> {
    if (!subject) throw new Error('subject must be a valid blog post');
    if (count < 1) return [];

    return this._references
      .filter(reference => {
        if( reference.blogPostId === subject.blogPostId ) return false;
        const isSubjectARealization = subject.category === WellKnownBlogPostCategory.Realization;
        const isReferenceARealization = reference.category === WellKnownBlogPostCategory.Realization;
        return isSubjectARealization != isReferenceARealization;
      })
      .map(reference => {
        const weight = reference.tags
          .filter(tag => subject.tags.includes(tag))
          .length;
        return { reference, weight };
      })
      .filter(tuple => tuple.weight > 0)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, count)
      .map(tuple => tuple.reference);
  }

}

export const BlogPostRecommendationsProvider = new TagBasedRecommendations(BlogPosts);
