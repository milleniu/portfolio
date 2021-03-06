import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, List, Title, Image } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { BlogPostBase } from '../models/blog-post-base';
import { WellKnownTags } from '../blog-post-tags';

export class RedPandaUI extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/projects/red-panda-ui/';

  constructor() {
    super();
  }

  public readonly title: string = 'Red Panda UI';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Realization;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "Red panda UI est un projet communautaire réalisé en 2016 / 2017 sur Final Fantasy XIV."

  public readonly routerLink: string = 'red-panda-ui';
  public readonly tags: ReadonlyArray<WellKnownTags> = [
    WellKnownTags.Autonomy,
    WellKnownTags.GameDevelopment
  ];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph([
      "Red panda UI est un projet communautaire réalisé en 2016 / 2017. Il a eu pour but de proposer une " +
      "alternative à l'interface de base proposée par le jeu de rôle en ligne massivement multi-joueurs " +
      "(MMORPG) Final Fantasy XIV. (FF XIV).",

      "Ce MMORPG a comme particularité d'être jouable sur PC comme sur console, ainsi l'interface de base " +
      "se veut adaptée à ces deux supports. L'interface cherche également à respecter celle de la série des " +
      "Final Fantasy. On pourrait lister ses caractéristiques ainsi : épurée, arrondie, peu de couleur, peu " +
      "d'alertes visuelles et surtout peu configurable. Ces caractéristiques vont à l'encontre de celles " +
      "proposées par la référence du genre World of Warcraft (WoW) qui propose des interfaces très " +
      "configurables, rectangulaires et qui peuvent afficher une pluie d'alertes visuelles à l'écran."
    ]),
    new Divider(),

    new Title("Interface de FF XIV (avec Red Panda UI)", 3),
    new Image(this.assetsRoot + 'ffxiv_ui.jpg', "Interface Tutorial - FFXIV"),

    new Title("Interface de World of Warcraft", 3),
    new Image(this.assetsRoot + 'wow_ui.jpg', "Nnoggie Interface - WoW"),

    new Title("Cahier des charges", 2),
    new Paragraph(
      "L'objectif de ce projet a donc été de proposer une solution alternative, qui permettrait de " +
      "s'affranchir de ces limitations. Cette solution devrait respecter les points suivants :"
    ),
    new List([
      "Thème : le thème doit se séparer de la franchise et se rapprocher de celui plus classique de WoW",
      "Configurable : l'utilisateur doit pouvoir choisir la position des éléments de l'interface ainsi que de ses couleurs",
      "Alertes : il devrait être possible de rajouter des alertes en fonction d'événements arbitraires du jeu",
      "Facile : Cela devrait être assez simple de l'installer et si possible fonctionner « out of the box »"
    ]),

    new Title("Phase de développement", 2),
    new Divider(),

    new Title("Rencontre internationale", 3),
    new Paragraph(
      "Il convient en premier lieu de présenter une personne qui a été très importante dans la réalisation de " +
      "ce projet Mog. Il s'agit d'un joueur qui était à la tête d'un projet nommé aetherflow. Accompagné de " +
      "deux autres personnes, Ravahn et Ice, ils ont développé ce projet permettant l'utilisation d'addons au " +
      "sein de FF XIV. En effet, nativement, ce jeu n'autorisait pas l'utilisation d'outils extérieurs, ne " +
      "souhaitant pas avantager les joueurs PC vis-à-vis des joueurs consoles qui n'y auraient pas accès. Ils " +
      "ont donc employé une technique nommée l'injection de .dll afin de contourner cette limitation. Il était " +
      "désormais possible d'utiliser des addons."
    ),

    new Title("Un rush de deux mois", 3),
    new Paragraph([
      "Après avoir posé cette première pierre, ils ont recruté au sein de la communauté des développeurs qui " +
      "seraient intéressés pour travailler gratuitement sur cette base technique afin d'enrichir aetherflow " +
      "et permettre à terme une révélation au grand jour de leur projet. J’ai été l’un des développeurs " +
      "qu’ils ont recrutés, et c'est durant cette phase que j’ai pensé et conçu RedPanda UI.",

      "J’ai développé ce projet selon une méthode que l'on pourrait presque assimiler à une méthode agile. En " +
      "effet, il y avait de petites périodes de production ou de nouvelles fonctionnalités étaient ajoutées, " +
      "puis ces dernières étaient présentées à la communauté qui pouvait alors exprimer des retours, par " +
      "exemple une modification d'un élément de l'interface ou bien un changement de nomenclature dans la " +
      "configuration. Pour des versions plus imposantes il pouvait également être joint des vidéos.",

      "Un autre point intéressant était que le projet devait également faire face aux mises à jour respectives " +
      "d'aetherflow et de FF XIV. Ainsi, ce projet a été formateur pour moi sur l'aspect de gestion des " +
      "imprévus. J’ai dû apprendre à arrêter temporairement le travail sur certains aspects afin de " +
      "reconcentrer la capacité de production sur les tâches prioritaires."
    ]),

    new Title("Fin de vie du projet", 3),
    new Paragraph(
      "Au terme d'une période de deux mois, et à hauteur d'environ une trentaine d'heures de travail par " +
      "semaine, le projet a atteint un stade assez avancé. Mon collègue et moi-même avions développé les " +
      "éléments techniques suivants :"
    ),
    new List([
      "Interface du joueur, de la cible, de la cible de la cible et du focus personnalisé et configurable",
      "Des alertes visuelles pour les mécaniques avancées des classes de combats",
      "Un système d'alertes avancées pour des cibles choisies par le joueur",
      "Un radar de proximité",
      "Et d'autres éléments d'interface personnalisés (barre de lancement de sorts de la cible de votre cible par exemple)",
      "Également des points plus techniques :",
      [
        "Système de chargement des images pour réduire les risques de ralentissements en jeu",
        "Système de configuration centralisé",
        "Système d'extensions d'addons"
      ]
    ]),
    new Paragraph(
      "Malheureusement, au bout de ces deux mois intensifs de développement, le projet a dû fermer ses portes " +
      "pour des raisons professionnelles pour moi et personnelles pour mon acolyte."
    ),

    new Divider(),
    new Title("Autopsie du projet", 2),
    new Paragraph([
      "Bien que ce projet puisse être considéré comme un projet « non terminé », il serait dénigrant de le " +
      "considérer de la sorte. En effet, sa version initiale a été distribuée et utilisée par de nombreux " +
      "joueurs au sein de la communauté. Ce sont les nouvelles fonctionnalités qui n'ont jamais eu la chance " +
      "de voir le jour.",

      "Aujourd'hui, certes aetherflow n'est plus disponible, mais cela m'a permis de comprendre que tous les " +
      "projets peuvent s'effondrer à tout moment, même s’ils paraissent être au meilleur de leur forme. " +
      "Cependant, ce n'est pas pour autant que cela a été du temps perdu. Ce projet m'a permis " +
      "d'apprendre le développement communautaire, l'utilisation de ressources non documentées et des " +
      "techniques pour faire face aux imprévus. De plus, il m'a enseigné qu'à terme, il faut être à l'écoute " +
      "de ses confrères et surtout des utilisateurs, étant donné que c'est eux qui vont faire vivre le projet " +
      "sur le long terme."
    ])
  ];
}
