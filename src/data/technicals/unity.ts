import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';

export class Unity extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/technicals/unity/';

    constructor() {
        super();
    }

    public readonly title: string = 'Unity';
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "Unity est un moteur de jeu multi-plateforme développé par Unity Technologies.";

    public readonly routerLink: string = 'unity';
    public readonly tags: ReadonlyArray<string> = [ 'Unity', 'C#', 'Game Development' ];

    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph(
            "Unity est un moteur de jeu multiplateforme développé par Unity Technologies. Il est aujourd'hui l'un " +
            "des plus utilisés, aussi bien par les gros studios de développement que des indépendants. Il propose " +
            "une licence gratuite pour ceux souhaitant l'essayer."
        ),
        new Divider(),

        new Title("Avantages", 2),
        new List([
            "Unity utilise le langage C# sur la plateforme .NET avec l'implémentation Mono. Il est ainsi possible de " +
            "compiler du code Mono, mutliplateforme et multi-architecture. Toutefois, on peut utiliser un mode de " +
            "compilation « IL2CPP » afin de générer du code intérmédiaire C++",

            "Il peut être utilisé pour créer un vaste panel d'applications: ",
            [
                "Jeux en 2 dimensions",
                "Jeux en 3 dimensions",
                "Réalite Virtuelle",
                "Réalité Augmentée",
                "Simulations"
            ],

            "Il est possible de produire des jeux pour un importants nombre de plateformes (25+)"
        ]),

        new Title("Au quotidien", 2),
        new Paragraph(
            "J'utilise très rarement Unity dans le cadre professionnel. C'est plutôt durant mes heures perdues que " +
            "je produis à l'aide de ce logiciel."
        ),
        new List ([
            "Dans le cadre professionnel j'ai eu à réaliser des simulations afin de répondre à des problématiques " +
            "liées au monde de la logistique. Unity m'a permis de rapidement mettre en place ces dernières et " +
            "ainsi d'obtenir des résultats à présenter dans un délai imparti de part sa facilité de prise en main " +
            "et l'important éventail de fonctionnalités qu'il propose de base.",

            "Durant mes loisirs, j'ai pris part à plusieurs projets de développment à taille humaine sur ce " +
            "logiciel, majoritairement en tant que programmeur. Cela m'as permis de me confronter à la création " +
            "de jeu en 2 et 3 dimensions.",

            "Grâce à Unity, j'ai pu participer à plusieurs GameJam en équipe. Ce logicial m'a permis de pallier " +
            "mes lacunes liées au développement de jeux et de ne pas être un frein pour mes cooéquipiers.",

            "Enfin, j'ai également réalisé plusieurs algorithmes de simulations afin de m'améliorer dans " +
            "certains domaines d'expertises. J'ai ainsi pu explorer les thématiques de la génération procédurale " +
            "et des simulations du mouvements des astres."
        ])
    ];
}