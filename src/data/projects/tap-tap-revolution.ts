import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title, List, Image } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { WellKnownTags } from '../blog-post-tags';

export class TapTapRevolution extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/projects/tap-tap-revolution/';

  constructor() {
    super();
  }

  public readonly title: string = 'Tap Tap Revolution';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Realization;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = 'TapTapRévolution est un jeu vidéo de rythme développé sous Unity en 2017.'

  public readonly routerLink: string = 'tap-tap-revolution';
  public readonly tags: ReadonlyArray<WellKnownTags> = [
    WellKnownTags.GameDevelopment,
    WellKnownTags.Unity,
    WellKnownTags.CSharp,
    WellKnownTags.Autonomy,
    WellKnownTags.KayakerExperience
  ];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph([
      "Tap Tap Revolution est un petit projet développé sous Unity en 2017. Il s’agit d’un jeu vidéo rythmique " +
      "basé sur la mémorisation et la répétition de patterns. Le joueur est confronté à une grille sur " +
      "laquelle apparait un pattern de déplacements (haut, bas, droite, gauche) qu’il doit mémoriser pour le " +
      "répéter sans erreur. Cependant des modificateurs viennent complexifier la tâche, par exemple " +
      "modification de l’opacité du jeu, déplacement des cases ou autres visuels divers et variés.",

      "J’ai développé ce projet en collaboration avec un second développeur, sur une période de 3 mois. " +
      "Pour nous deux, ce projet avait pour but d’expérimenter et d’améliorer notre connaissance du moteur Unity."
    ]),
    new Divider(),

    new Title("Objectifs", 2),
    new Paragraph(
      "L’objectif de développement de ce jeu vidéo était donc de s’améliorer techniquement. Pour y parvenir, " +
      "nous avons structuré le développement en plusieurs étapes : "
    ),
    new List([
      "Documentation avant-projet : rédaction d’un ensemble de documents permettant de définir l’ensemble du projet",
      "MVP : développement de la version viable minimale",
      "Feedback : collecter des retours d’expérience sur le MVP",
      "Développement itératif : cycles de développement avec retour des utilisateurs",
      "Après-projet : retour sur expérience et sur l’application"
    ]),

    new Divider(),
    new Title("Le développement d'un jeu vidéo", 2),

    new Paragraph([
      "Afin de ne pas commencer à coder immédiatement sans structure, sans organisation et sans tâches " +
      "prédéfinies, nous souhaitions rédiger un ensemble de documents avant –projet pour définir clairement " +
      "ce que nous allions faire, comment, pourquoi et sur quelle durée. Pour cela, nous avons commencé par " +
      "la rédaction d’un document. Ce dernier contenait entre autres la liste des membres, leur rôle, les " +
      "différentes sources d’inspiration, la description du projet en 1, 5 et 10 minutes, les principales " +
      "mécaniques, les premières échéances, le budget. La rédaction de ce document nous a déjà occupés une " +
      "bonne semaine. Sa réalisation terminée, nous avons pu commencer à lancer Unity.",

      "Nous avons ensuite élaboré le développement. Toutefois, nous nous sommes rapidement aperçus que la " +
      "synchronisation des tâches ainsi que le développement en parallèle des missions étaient plus ardus que " +
      "nous ne l’avions initialement imaginé. Afin de remédier à ces problèmes organisationnels, nous avons " +
      "mis en place une méthodologie SCRUM à l’aide de VSTS. Cette représentation sous forme de tâches nous a " +
      "permis de plus facilement identifier le reste à faire ainsi que les sujets déjà pris en charge. Armés " +
      "de cette méthodologie, nous avons repris le développement et après plusieurs mois de labeur, nous " +
      "avons pu sortir notre MVP.",

      "Nous l’avons fait essayer à plusieurs connaissances et avons pu collecter les retours de nos premiers " +
      "utilisateurs. Cela nous a permis de sortir quelques nouvelles versions par la suite. Cependant, le " +
      "flux tumultueux de la vie nous ayant rattrapés, nous avons dû mettre le projet en pause… pause qui " +
      "s’est avérée terminale."
    ]),

    new Title("Interface finale", 2),
    new Image(this.assetsRoot + 'ui.jpg', 'Tap Tap Revolution UI'),

    new Divider(),
    new Title("Analyse finale", 2),
    new Paragraph([
      "Quelques mois après la « fin » de ce projet, nous avons réalisé une analyse de l’état du projet. Nous " +
      "nous sommes aperçus que nous nous étions confrontés à une loi bien connue des développeurs, la loi de " +
      "Pareto. Nous avions fait 80% des fonctionnalités, mais le 20% du reste à faire allait être plus " +
      "fastidieux à implémenter. Il est également plus facile de se lancer, car le projet évolue plus " +
      "rapidement dans cette période, mais une fois passée l’euphorie initiale, il peut être plus compliqué " +
      "de garder sa motivation lorsque la charge de travail requise pour obtenir une évolution s’accroît " +
      "drastiquement.",

      "Bien que ce projet n’ait pas abouti, il m’a apporté une réelle plus-value. Tout d’abord, j’ai " +
      "grandement appris sur le moteur Unity que je n’avais qu’effleuré auparavant mais également sur des " +
      "compétences transversales à l’instar de la gestion d’équipe et de la gestion de projet.",

      "Même si ce projet n’a jamais refait surface malgré une tentative quelques années plus tard, il a été la " +
      "genèse d’autres projets qui ont eux abouti. Et pour ces projets, il me sert toujours de référence sur " +
      "les aspects de gestion et même sur certains aspects de programmation bien que j’ai évolué techniquement " +
      "depuis."
    ])
  ];

}
