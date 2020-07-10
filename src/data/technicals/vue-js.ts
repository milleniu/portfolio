import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class VueJS extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/technicals/vue-js/';

  constructor() {
    super();
  }

  public readonly title: string = 'Vue.js';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "Vue.js est un framework open source créé par Evan You en JavaScript.";

  public readonly routerLink: string = 'vue-js';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.VueJS];

  content: ReadonlyArray<BlogPostContent> = [
    new Paragraph(
      "Vue.js est un framework JavaScript open source créé par Evan You et aujourd'hui maintenu par une " +
      "équipe de membres actifs dont certains font partie de grandes entreprises à l'instar de Netlify et " +
      "Netguru."
    ),
    new Divider(),

    new Title("Framework tout terrain", 2),
    new List([
      "Il utilise le le modèle MVVM ainsi qu'un système de réactivité pour la donnée qui exploite le " +
      "JavaScript afin d'avoir un re-rendu optimisé.",

      "Il est facile de l'ajouter sur un système déjà existant, même partiellement. Ainsi on peut faire " +
      "migrer un projet legacy sans devoir tout migrer en une seule fois ou bien devoir tout recommencer à 0.",

      "Il est également très ouvert dans la manière dont on peut l'utiliser. On peut par exemple utiliser " +
      "la syntaxe des templates ou bien utiliser des fonctions de rendus avec JSX.",

      "Il supporte également TypeScript ce qui est un avantage pour développer des applications de grande " +
      "envergure."
    ]),

    new Title("Projet legacy quand tu nous tiens", 2),
    new Paragraph(
      "Vue.js est l'un des frameworks que j'utilise au sein de mon entreprise. Il est plutôt utilisé pour " +
      "les projets plus anciens du fait de sa maléabilité. Recommencer ces derniers à zéro n'est pas " +
      "envisageable car le coût et le temps de développement néccessaire sont trop importants."
    ),
    new List([
      "Ainsi Vue.js me permet de travailler sur ces projets legacy qui possèdent une architecture cliente " +
      "complexe en raison de leur ancienneté. Lors du développement il m'est possible d'intégrer " +
      "le framework et de le mettre en cohabitation avec d'autres framework et ainsi de faire migrer le " +
      "site au fur et à mesure.",

      "Pour des applications plus légères qui ne néccéssitent pas une architecture complexe et avancée, " +
      "il est également plus simple d'utiliser Vue.js plutôt qu'un autre framework. Utiliser ce framework " +
      "pour mener à bien certains projets est un vrai plus."
    ])
  ];
}
