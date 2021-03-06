import { BlogPostContent, Paragraph, List, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class Angular extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/technicals/angular/';

    constructor() {
        super();
    }

    public readonly title: string = 'Angular';
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Technical;

    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "Angular est un framework JavaScript open source co-dirigé par Google et basé sur TypeScript.";

    public readonly routerLink: string = 'angular';
  public readonly tags: ReadonlyArray<WellKnownTags> = [WellKnownTags.Angular];

    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph(
            "Angular (plus communément appelé Angular 2+ ou avec l’acronyme « ngx ») est un framework JavaScript " +
            "open source développé par Google, des entreprises et la communauté. C’est un projet dont la première " +
            "version officielle date de septembre 2016. Il s’agit d’une refonte complète d’un projet de la même " +
            "équipe : AngularJS."
        ),
        new Divider(),

        new Title("MVVM en typescript", 2),
        new List([
            "Il est basé sur TypeScript, il exploite donc la vérification statique et opérationnelle de la saisie. " +
            "Cela permet d'accroître le nombre d'erreurs à la compilation et ainsi de diminuer le nombre d'erreurs " +
            "au runtime",

            "Il utilise le modèle MVVM accompagné du « two way bindings », le premier permet de travailler séparément " +
            "sur la même partie de l'application et le second minimise les risques d'erreurs puisque c'est le " +
            "framework qui s'occupe de la synchronisation de la vue et du modèle.",

            "Il possède une importante documentation",

            "Un moteur d'injection de dépendances est présent de base au coeur du framework"
        ]),

        new Title("Framework pour applications clientes", 2),
        new Paragraph(
            "Angular n'est pas le seul framework JavaScript que j'utilise. Cependant, de par ses avantages, c'est " +
            "celui que je préfère utiliser pour plusieurs de mes projets :"
        ),
        new List ([
            "Au sein de mon entreprise, j'ai mis en place une architecture documentée qui est désormais utilisée par " +
            "tous nos nouveaux projets sur angular. Elle a pour but de faciliter la compréhension du développeur " +
            "grâce à une organisation logique et réitérative des fichiers. Elle permet aussi à tout nouvel " +
            "intervenant de s'intégrer plus efficacement et plus simplement dans un nouveau projet puisque les " +
            "architectures seront similaires.",

            "Angular est utilisé dans l'une de mes équipes pour gérer une application web multi-sites et multi-" +
            "tenants. Grâce au système de projets et d'injection de dépendances, nous avons pu produire facilement " +
            "des librairies de composants réutilisables et modifiables.",

            "Enfin, angular est aussi le moteur qui est est derrière ce portfolio. Il m'a servi pour gérer " +
            "dynamiquement l'ajout de publications, aussi bien au niveau des différents composants qu'au niveau de la " +
            "gestion de la navigation."
        ])
    ]
}
