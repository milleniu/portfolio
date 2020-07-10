import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { WellKnownTags } from '../blog-post-tags';

export class FSharp extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/projects/fsharp/';

  constructor() {
    super();
  }

  public readonly title: string = 'Cours de F#';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Realization;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "Au cours de mon dixième semestre à IN'TECH, j'ai eu l'opportunité d'assurer des cours de F#."

  public readonly routerLink: string = 'fsharp';
  public readonly tags: ReadonlyArray<WellKnownTags> = [
    WellKnownTags.PopularizationOfProblems,
    WellKnownTags.KayakerExperience
  ];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph([
      "Durant mon cursus à INTECH, j’ai eu l’opportunité d’assurer les cours de F#. C’est au cours de mon " +
      "dixième semestre que j’ai eu à compléter cette expérience pédagogique à l’aide de la présentation " +
      "laissée par mon prédécesseur absent en cours de cursus.",

      "Le F# n’était pas un sujet sur lequel j’étais expert mais j’espérais pouvoir délivrer un enseignement " +
      "de qualité et de plus m’améliorer sur cette thématique du cursus.  Toutefois, j’étais conscient de la " +
      "nécessité de qualité de mon cours, je ne pouvais pas me permettre de laisser à l’abandon pédagogique " +
      "cette promotion. J’ai donc accepté d’encadrer une formation de 4 jours proposée à une formation d’une " +
      "vingtaine d’étudiants en dernière année à l’aide du support de mon prédécesseur."
    ]),
    new Divider(),

    new Title("La formation", 2),

    new Title("Préparation", 3),
    new Paragraph(
      "Ma période de préparation à cet enseignement s’est étalée sur une semaine. J’ai tout d’abord parcouru, " +
      "lu et relu la présentation de l’enseignant qui m’avait précédé. J’ai ainsi pu commencer à réaliser des " +
      "exercices en autonomie et évaluer mes propres compétences. Ces expérimentations personnelles m’ont " +
      "permis d’identifier mes zones d’ombre et d’y revenir par la suite afin de m’éclairer sur ces points " +
      "spécifiques. J’ai alors eu recours à des sources extérieures, notamment celles proposées par la " +
      "bibliographie du support que j’ai accompagnées de recherches personnelles. Une fois le cours " +
      "majoritairement compris, j’ai pu préparer mes corrigés aux exercices en proposant plusieurs solutions : " +
      "une solution académique mais également plusieurs solutions alternatives qui permettaient également de " +
      "répondre à la consigne. Cette démarche avait pour but de montrer qu’il n’y avait pas une solution mais " +
      "qu’il était possible de rallier le sommet par plusieurs sentiers et qu’une solution non académique " +
      "n’est pas une mauvaise solution."
    ),

    new Title("Déroulé", 3),
    new Paragraph([
      "C’est donc armé de ces nouvelles compétences que j’ai lancé ma première visioconférence et partagé la " +
      "première diapositive. J’avais fait le choix de respecter les séquences pédagogiques de mon prédécesseur, " +
      "n’ayant pas assez d’expérience pour créer ma propre trame.  J’ai commencé par interroger les étudiants " +
      "sur leurs connaissances de la thématique, puis j’ai mis à l’épreuve leurs réponses en leur proposant " +
      "les premiers exercices théoriques. Une fois la théorie redéfinie et réexpliquée pour tout le monde, " +
      "j’ai pu commencer à enseigner les éléments pratiques du langage et à proposer les exercices au fur et " +
      "à mesure du déroulé du cours. Les corrigés de ces exercices ont été sauvegardés dans un espace de " +
      "stockage partagé et synchronisé.",

      "Cela nous a permis d’avoir une vue d’ensemble du langage afin que les étudiants soient en capacité " +
      "de réaliser leur premier programme complet en autonomie. La troisième demi-journée a été consacrée aux " +
      "sucres syntaxiques afin de mettre dans les mains des étudiants toutes les armes nécessaires pour " +
      "développer l’exercice final : implémenter un ludiciel en réseau en F#, projet à réaliser sur 5 " +
      "demi-journées par équipe de 4, 5 personnes en autonomie. Durant cette réalisation en autonomie, je " +
      "restais toutefois disponible pour répondre aux questions potentielles ou pour aider à dépasser les " +
      "difficultés rencontrées."
    ]),

    new Divider(),
    new Title("L'après cours", 2),
    new Paragraph([
      "Pour ma part, en tant qu’étudiant, ce cour s’est relativement bien déroulé : mon équipe a pu mener à " +
      "bien son  projet #github#. En tant que formateur, j’ai eu des retours positifs des autres étudiants " +
      "aussi bien sur le cours, que sur les réponses aux questions qu’ils ont pu avoir. Cependant, si je " +
      "devais émettre un bémol, ce serait que je n’ai pas eu de visibilité sur l’ensemble des projets finaux, " +
      "ces derniers ayant été présentés, puis notés par le responsable de notre filière. Cette absence de " +
      "visibilité m’empêche d’avoir une vision finale ainsi qu’une auto-évaluation de mon propre enseignement. " +
      "Cela m’aurait permis d’estimer la qualité de mon enseignement en fonction de la qualité de leurs " +
      "programmes.",

      "Pour ce cours, d’avoir été formateur m’a permis d’être encore davantage acteur de mes apprentissages. " +
      "Comme le dit Boileau « Ce qui se conçoit bien s’énonce clairement » ; le travail de préparation en " +
      "amont, la recherche de clarté lors de mes explications m’ont amené à un degré d’appropriation de ce " +
      "langage nettement supérieur à celui que j’aurais eu en résolvant seulement les exercices en tant que " +
      "simple étudiant. Dispenser ce cours m’a assuré une compréhension plus approfondie du F#."
    ])
  ];

}
