import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostContent, Paragraph, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { WellKnownTags } from '../blog-post-tags';

export class AspNetAuthClient extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/projects/asp-net-auth-client/';

    constructor() {
        super();
    }

    public readonly title: string = 'AspNet Auth Client';
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Realization;

    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "CK-AspNetAuth-Client est un projet typescript qui implémente un système de login mot de passe dans une web-application.";

    public readonly routerLink: string = 'asp-net-auth-client';
    public readonly tags: ReadonlyArray<WellKnownTags> = [
      WellKnownTags.TypeScript,
      WellKnownTags.Angular,
      WellKnownTags.Autonomy
    ];

    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph(
            "CK-AspNetAuth-Client est un projet typescript que j’ai commencé lors de mon premier stage au sein de " +
            "mon entreprise. C’est un package qui implémente un système de login mot de passe dans une " +
            "web-application. Il respecte la GDPR, inclue les fonctionnalités de mémorisation de la dernière cession " +
            "et il a également des implémentations spécifiques pour certains framework javascript. La gestion et la " +
            "validation des informations côté serveur sont gérées par un autre package de l’entreprise, " +
            "CK-AspNet-Auth. Ce projet est toujours en évolution, majoritairement en maintenance mais avec également " +
            "l’ajout de nouvelles fonctionnalités."
        ),
        new Divider(),

        new Title("Rush initial", 2),
        new Paragraph(
            "C’est en 2017 que ce projet a débuté. Sa vocation initiale était de généraliser la manière dont nous " +
            "gérions les systèmes d’authentification dans nos applications web. C’était une première fois pour moi, " +
            "je n’avais auparavant jamais développé de package. Un package est un type d’artefact informatique : il " +
            "est autonome par rapport à sa fonctionnalité mais il n’a de sens qu’une fois intégré dans une " +
            "application. Comme il s’agissait d’un package client, le langage de développement retenu a été " +
            "typescript. Ce langage m’était déjà familier mais c’était la première fois que je l’utilisais pour ce " +
            "type de projet. Ce début, comme le début de tout projet, a été explosif : j’avais plein d’idées et je " +
            "voulais tout implémenter. Il a donc incombé à mon tuteur de l’époque de réguler ma folie créatrice et " +
            "de définir clairement les spécifications de ce package dans un document. La première version majeure " +
            "répondait donc à ce cahier des charges."
        ),
        new Title("Transmission de connaissances", 2),
        new Paragraph(
            "Au cours de mon second stage, ce projet a évolué vers sa deuxième version majeure. En plus des " +
            "fonctionnalités préexistantes, il a fallu rajouter deux types d’authentification ainsi que la gestion " +
            "d’une nouvelle fonctionnalité́ présente dans CK-AspNet-Auth, l’ajout de paramètres supplémentaires " +
            "personnalises dans les réponses du webfrontauth (le gestionnaire d’authentification backend). Pour ce " +
            "faire, les technologies utilisées n’ont pas changé depuis la première version, il s’agit de typescript. " +
            "Cette itération a été différente de la première : ce n’est pas moi qui ai développé ces fonctionnalités " +
            "mais un nouveau stagiaire accueilli au sein de l’entreprise. Toutefois, étant le développeur de la " +
            "version initiale de ce package, il a été invité à se tourner vers moi en cas de problèmes liés au " +
            "code préexistant. Je l’ai donc aidé à développer les différentes fonctionnalités."
        ),
        new Title("LTS : Support Long Terme", 2),
        new Paragraph(
            "La troisième et dernière itération en date de ce projet a été la publication d’une LTS. Cela s’est " +
            "déroulé en deux étapes. Tout d’abord nous avons effectué la mise à niveau de la base de code existante, " +
            "travail que j’ai réalisé en collaboration avec un autre employé de l’entreprise en fonction de nos " +
            "appétences respectives. Nous avons également réalisé un sondage auprès de l’équipe afin de connaître " +
            "l’ensemble des fonctionnalités désirées (tout en restant mesurées). Nous les avons ensuite intégrées au " +
            "projet avant de passer à l’étape suivante : la mise en maintenance. Dans cet état, nous ne rajoutons " +
            "plus de fonctionnalités à ce projet. Nous nous contentons de régler les bugs et de le maintenir à jour " +
            "vis-à-vis de ces dépendances. Aujourd’hui, c’est moi qui m’occupe de cette mission."
        ),

        new Divider(),
        new Title("Bilan", 2),
        new Paragraph(
            "CK-AspNetAuth-Client s’est différencié de mes autres projets puisque j’y ai appris à porter la " +
            "casquette de conseiller. J’ai guidé le stagiaire au travers du programme qui était déjà réalisé, lui " +
            "expliquant ainsi quelles parties du protocole étaient actuellement déjà présentes et quelles parties " +
            "restaient manquantes et à sa charge. Cela nous a permis d’établir une liste des tâches à réaliser en " +
            "termes d’évolution, liste à laquelle est venue se greffer les corrections de bugs. Une fois cette liste " +
            "mise au point, nous avons pu, à l’aide de l’expert technique du projet, prioriser ces tâches afin qu’il " +
            "puisse commencer son développement. Fort de mon expérience passée, je savais qu’il était nécessaire de " +
            "l’aider dans cette tâche, puisque cette dernière peut parfois paraitre insurmontable les premières fois " +
            "que l’on s’y confronte. En effet, assigner de simples nombres à des objectifs qui vont réguler tout le " +
            "projet peut dérouter et en désarmer plus d’un. Prioriser les tâches nécessite de l’expérience, de plus, " +
            "c’est une étape que l’on ne peut réaliser pour vous, chaque développeur étant unique, la difficulté de " +
            "chacune des tâches lui sera propre."
        ),
    ];
}
