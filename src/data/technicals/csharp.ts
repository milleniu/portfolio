import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class CSharp extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/technicals/csharp/';

  constructor() {
    super();
  }

  public readonly title: string = 'C# et .NET Core';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "C# est un langage développé par Microsoft que j'utilise en entreprise et dans mon temps libre.";

  public readonly routerLink: string = 'csharp';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.CSharp];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph(
      "C# est un langage de programmation orientée objet. Il est commercialisé par Microsoft sur la " +
      "plateforme .NET depuis 2002. C’est un dérivé du langage C++ et il est similaire au Java dont il " +
      "s’inspire de la syntaxe et des concepts.",
    ),
    new Divider(),

    new Title("Modulaire et multiplateforme", 2),
    new List([
      "Il est désormais open source grâce à .NET Core. Cela permet une meilleure compréhension et un " +
      "meilleur investissement de la communauté qui peut en décortiquer les entrailles.",

      "C’est un langage multiplateforme, bien que certains points soient exclusifs à Windows, la quasi-" +
      "totalité des applications fonctionne sur Windows, MacOS et Linux.",

      "Il est modulaire ce qui permet aux développeurs de ne sélectionner que les parties nécessaires afin " +
      "d’avoir de meilleures performances et une meilleure maintenabilité : une meilleure expérience au " +
      "quotidien."
    ]),

    new Title("Backends, algorithmes et jeux vidéos", 2),
    new Paragraph(
      "Ce langage possède de multiples applications, mais dans mon expérience de développeur au quotidien il " +
      "répond à trois de mes besoins :"
    ),
    new List([
      "En premier lieu, je développe des back ends à l’aide d’ASP .NET Core. Il me permet de gérer facilement " +
      "les couches de transformations de données et de stockage de données. Pour ces dernières j’utilise " +
      "notamment Dapper au quotidien.",

      "En deuxième lieu, j’implémente des algorithmes « one-shot » exécutés à la demande. Ces algorithmes " +
      "plus complexes que des processus d’altération de la donnée standard peuvent ensuite être appelés dans " +
      "de plus grosses applications. Leur sujet est souvent lié au monde des systèmes d’informations " +
      "géographiques : algorithme d’optimisation de tracé, norme MVT…",

      "En dernier lieu, dans mon temps libre, je l’utilise sur le moteur de jeu multiplateforme Unity. " +
      "Grâce à ce moteur, j’ai pu aussi bien réaliser des simulations physiques, représentation du système " +
      "solaire par exemple, que des jeux développés en petite équipe de 3 – 4 personnes."
    ])
  ]
}
