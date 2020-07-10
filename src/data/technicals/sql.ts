import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class SQL extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/technicals/sql/';

  constructor() {
    super();
  }

  public readonly title: string = 'Microsft SQL Server';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "Microsoft SQL Server est un système de gestion de base de données développé par Microsoft.";

  public readonly routerLink: string = 'sql';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.SQL];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph(
      "Microsoft SQL server est un système de gestion de base de données développé et commercialisé par " +
      "Microsoft. If fonctionne sous Windows et Linux et se distingue par une grande richesse dans ses " +
      "fonctionnalités. Par exemple, il supporte nativement les requêtes multi-base et multi-schéma."
    ),
    new Divider(),

    new Title("Base de données et SIG", 2),
    new List([
      "SQL Server Management Studio (SSMS) est un outil fourni avec les versions payantes de SQL Server " +
      "Il permet de se connecter et d'administrer facilement plusieurs bases de données. Ainsi, durant le " +
      "développement on peut aisément créer et / ou dupliquer des bases de données à la volée. Ce processus " +
      "facilite la création de scripts de migration.",

      "Il intégre un SIG dans toutes ses versions modernes. Celui-ci permet de stocker et de manipuler des " +
      "objets géométriques ou géographiques. Il est basé sur le standard OGC ce qui permet de communiquer " +
      "facilement avec le monde extérieur.",

      "Il est intégralement supporté dans Azure. Étant donné que mon entreprise utilise aujourd'hui cette " +
      "stack technique, cela facilite les phases de tests et déploiements, mais aussi la recherche et la " +
      "correction de bugs."
    ]),

    new Title("Au quotidien", 2),
    new Paragraph(
      "La quasi totalité des projets sur lesquels je travaille utilisent Microsoft SQL Server. C'est donc une " +
      "technologie que je côtoie tous les jours et avec laquelle je dois travailler en harmonie pour traiter " +
      "différents types de problématiques."
    ),
    new List([
      "Le premier type de problématique est le développement : du stockage des informations utilisateurs et " +
      "des projets d'une plateforme aux mécanismes intrinsèques aux processus de connections et d'invitations, " +
      "il ne se passe presque pas une journée durant laquelle je ne doive regarder l'un de mes serveurs.",

      "Suite au développement d'une fonctionnalité, il convient de la mettre en ligne. Il faut alors gérer " +
      "les chaînes de développment et d'intégration continues et configurer les serveurs SQL sur les " +
      "différents environnements de développements et de productions, pour qu'ils cohabitent avec ces " +
      "processus automatiques.",

      "Enfin, il faut analyser les différentes bases afin de s'assurer de la qualité de la donnée et parfois " +
      "remanier la base de données afin d'améliorer les temps de calculs et / ou de réponses des requêtes.",
    ])
  ];
}
