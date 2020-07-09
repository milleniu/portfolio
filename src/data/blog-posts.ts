import { RedPandaUI } from './projects/red-panda-ui';
import { CSharp } from './technicals/csharp';
import { Angular } from './technicals/angular';
import { Typescript } from './technicals/typescript';
import { VueJS } from './technicals/vue-js';
import { SQL } from './technicals/sql';
import { Unity } from './technicals/unity';
import { BlogPost } from 'src/app/core/models/blog-post.models';
import { TapTapRevolution } from './projects/tap-tap-revolution';
import { FSharp } from './projects/fsharp';
import { PeerPairPrograming } from './transervals/peer-pair-programing';
import { PopularizationOfProblems } from './transervals/popularization-of-problems';
import { Autonomy } from './transervals/autonomy';
import { KayakerExperience } from './transervals/kayaker-experience';
import { AspNetAuthClient } from './projects/asp-net-auth-client';

export const BlogPosts: ReadonlyArray<BlogPost> = [
    new TapTapRevolution(),
    new Angular(),
    new Typescript(),
    new VueJS(),
    new SQL(),
    new Unity(),
    new PeerPairPrograming(),
    new Autonomy(),
    new KayakerExperience(),
    new RedPandaUI(),
    new FSharp(),
    new PopularizationOfProblems(),
    new CSharp(),
    new AspNetAuthClient(),
];