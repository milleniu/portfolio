import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title, List, Image } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { WellKnownTags } from '../blog-post-tags';

export class PopularizationOfProblems extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/transversals/popularization-of-problems/';

  constructor() {
    super();
  }

  public readonly title: string = 'Vulgarisation des problèmes';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Transversal;

  public readonly coverImage: string = this.assetsRoot + 'cover.svg';
  public readonly description: string = "Au quotidien, je me dois régulièrement de simplifier des problèmes à l'aide de schémas et de documentations.";

  public readonly routerLink: string = 'popularization-of-problems';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.PopularizationOfProblems];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph(
      "Dans mon travail, je suis régulièrement confronté à des problèmes complexes, par exemple algorithmes " +
      "avancés pour répondre aux besoins des clients, refonte de l’architecture d’un projet pour pallier la " +
      "dette technique, pour lesquels je dois par la suite rédiger une documentation pour l’équipe de " +
      "développement ou réaliser une présentation à destination des clients. Bien que les cibles ne soient pas " +
      "les mêmes, la démarche reste similaire : il s’agit de vulgariser le problème et non de le détailler sous " +
      "tous ses angles."
    ),
    new Divider(),

    new Title("La situation", 2),
    new Paragraph(
      "Au sein de mon entreprise, je participe à un projet en tant que Tech Lead. Ce poste implique entre autres " +
      "deux responsabilités : justifier des estimations de temps de développement au client et assister l’équipe " +
      "dans sa compréhension du développement du produit. La première de ces responsabilités m’impose donc " +
      "d’expliquer à des personnes qui ne maîtrisent pas l’aspect technique, les effets de bord de leurs besoins " +
      "client. En effet, un besoin qui peut sembler anodin peut être très complexe à ajouter dans la base de " +
      "code existante. Quant à l’équipe qui ne possède pas forcément une vision globale du produit sur lequel " +
      "elle travaille, il convient de lui synthétiser les problématiques qui la concernent afin qu’elle ait " +
      "toutes les informations nécessaires pour développer efficacement et dans de bonnes conditions."
    ),

    new Title("Ma démarche", 2),
    new Paragraph(
      "Pour répondre à ces besoins, j’ai pris la décision de produire de la documentation technique que " +
      "j’introduis auprès des intéressés à l’aide de présentations. Pour ces deux actions, je m’impose trois " +
      "règles :"
    ),
    new List([
      "Contextualisation : Le contexte est essentiel pour expliciter certaines complications. Certains " +
      "problèmes peuvent paraître bénins lorsqu’ils sont isolés. Toutefois, une fois présentés avec par " +
      "exemple une prise en compte d’un historique de développement ou bien des limitations techniques " +
      "en place, ils peuvent alors être mesurés dans toute leur envergure et prendre tout leur sens. ",

      "Vulgarisation : en fonction de son auditoire, il faut savoir adapter son langage. Il doit être adéquat " +
      "et ciblé. Il existe souvent un double vocabulaire pour une même fonctionnalité. Dans l’un de mes " +
      "projets, une fonctionnalité s’intitule « Super Utilisateur » pour le client et « Manager » pour " +
      "l’étude technique. Il faut également moins détailler la partie technique avec le client puisque ce " +
      "dernier n’est pas formé sur ses aspects. ",

      "Schématisation : le meilleur moyen d’illustrer et d’expliciter les problèmes techniques est " +
      "d’accompagner la documentation ou la présentation orale de schémas. Mon outil de prédilection est " +
      "inusuel puisqu’il s’agit de mspaint avec une préférence pour la production de schémas en live lors " +
      "des réunions (client et/ou équipe). L’avantage de cet outil est qu’il est très basique. On ne perd " +
      "donc pas de temps à vouloir utiliser LA fonctionnalité de l’outil et les schémas ont une plus faible " +
      "probabilité de devenir complexes. Certes si le schéma a vocation à être pérenne il conviendra de le " +
      "retravailler avec un outil plus approprié, mais mspaint reste un outil suffisant pour produire des " +
      "schémas à l’instar du suivant :"
    ]),
    new Image(this.assetsRoot + 'schema.png', 'Sample schema made on mspaint software'),

    new Divider(),
    new Paragraph(
      "Grâce à l’utilisation de tous ces outils, je suis donc capable d’expliquer de manière plus succincte " +
      "et plus efficace les problèmes ce qui nous permet d’être plus productifs au quotidien."
    )
  ];

}
