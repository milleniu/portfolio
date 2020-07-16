import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class Typescript extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/technicals/typescript/';

  constructor() {
    super();
  }

  public readonly title: string = 'TypeScript';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

  public readonly coverImage: string = this.assetsRoot + 'cover.svg';
  public readonly description: string = "TypeScript est un langage open source développé par Microsoft.";

  public readonly routerLink: string = 'typescript';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.TypeScript];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph(
      "TypeScript est un langage de programmation développé par Microsoft. Il est libre et open source. Son " +
      "but est d'améliorer la production de code JavaScript. TypeScript est un sur-ensemble du langage " +
      "JavaScript dans lequel il est transpilé. Ainsi il peut être interprété par les mêmes moteurs que ce " +
      "dernier."
    ),
    new Divider(),

    new Title("Avantages", 2),
    new List([
      "Il possède un système de type avancé très puissant. Il supporte le typage statique, les génériques, " +
      "les interfaces, les classes ECMAScript 2015 avec typings.",

      "Ce système est si avancé qu'il en est lui-même Turing Complete. Cet atout permet d'avoir une analyse " +
      "statique des programmes très poussée ce qui facilite l'expérience du développeur, qu'il écrive ses " +
      "propres types ou bien qu'il en utilise des prédéfinis tout simplement.",

      "Comme TypeScript est un sur-ensemble de JavaScript, il est très facile de l'intégrer à un projet déjà " +
      "existant. De plus, il n'est pas obligatoire d'utiliser tout de suite l'ensemble des fonctionnalités, on " +
      "le configurer afin qu'il corresponde à notre besoin immédiat, puis l'adapter au fil de l'eau."
    ]),

    new Title("Strongly typed javascript", 2),
    new Paragraph(
      "J'utilise TypeScript presque quotidiennement et je m'efforce de migrer mes projets JavaScript vers " +
      "TypeScript. En effet, le système de type est une réelle force qui me permet d'améliorer mon expérience, " +
      "quel que soit le sujet du développement."
    ),
    new List([
      "Lorsque je développe des applications Web, quel que soit le framework utilisé, TypeScript me permet de " +
      "faciliter l'emploi du pattern MVVM. En effet, les frameworks que j'utilise le plus, Angular et vue.js " +
      "utilisent ce pattern, et TypeScript permet d'assurer la cohérence de la donnée du ViewModel jusqu'à " +
      "la Vue.",

      "Je dois également implémenter des algorithmes Front End. Pour ce type de programme plus complexe, il " +
      "est avantageux de se simplifier un petit peu la tâche en confiant à nouveau à TypeScript la mission " +
      "de s'assurer de la cohérence de la donnée au cours des différentes étapes."
    ])
  ]
}
