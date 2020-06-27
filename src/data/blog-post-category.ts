import { BlogPostCategory } from 'src/app/core/models/blog-post.models'

export class WellKnownBlogPostCategory {
    public static Realization: BlogPostCategory = {
        label: 'Réalisations',
        path: 'realization'
    }
    
    public static Technical: BlogPostCategory = {
        label: 'Techniques',
        path: 'technical'
    }
    
    public static Transversal: BlogPostCategory = {
        label: 'Transversales',
        path: 'transversal'
    }
}

export class BlogPostCategoryStyling {
    public static __: BlogPostCategory = {
        label: 'Mes Compétences',
        path: [ 'technical', 'transversal' ]
    }
}