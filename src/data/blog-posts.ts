import { RedPandaUI } from './projects/red-panda-ui';
import { CSharp } from './technicals/csharp';
import { Angular } from './technicals/angular';
import { Typescript } from './technicals/typescript';
import { VueJS } from './technicals/vue-js';
import { SQL } from './technicals/sql';
import { Unity } from './technicals/unity';
import { BlogPost } from 'src/app/core/models/blog-post.models';

export const BlogPosts: ReadonlyArray<BlogPost> = [
    new RedPandaUI(),
    new CSharp(),
    new Angular(),
    new Typescript(),
    new VueJS(),
    new SQL(),
    new Unity()
];