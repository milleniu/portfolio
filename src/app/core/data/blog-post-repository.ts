import { BlogPostRepository } from '../models/blog-post.models';
import { RedPandaUI } from './projects/red-panda-ui';

export const blogPostRepository: BlogPostRepository = {
    [ "red-panda-ui" ]: new RedPandaUI()
}
