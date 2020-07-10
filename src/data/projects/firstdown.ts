import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title, Image } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';
import { WellKnownTags } from '../blog-post-tags';

export class FirstDown extends BlogPostBase {
  private readonly assetsRoot = 'assets/blog/projects/firstdown/';

  constructor() {
    super();
  }

  public readonly title: string = 'FirstDown';
  public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Realization;

  public readonly coverImage: string = this.assetsRoot + 'cover.png';
  public readonly description: string = "First Down est une plateforme SAAS (Software As A Service) qui permet la visualisation de modèles en 3 dimensions et de réseaux souterrains dans le navigateur. C’est un projet sur lequel je travaille depuis 3 ans."

  public readonly routerLink: string = 'firstdown';
  public readonly tags: ReadonlyArray<WellKnownTags> = [
    WellKnownTags.PeerPairPrograming,
    WellKnownTags.CSharp,
    WellKnownTags.Autonomy,
    WellKnownTags.Angular,
    WellKnownTags.SQL,
    WellKnownTags.KayakerExperience,
    WellKnownTags.PopularizationOfProblems
  ];

  public readonly content: ReadonlyArray<BlogPostContent> = [
    new Paragraph([
      "First Down est une plateforme SAAS (Software As A Service) qui permet la visualisation de modèles en 3 " +
      "dimensions et de réseaux souterrains dans le navigateur. C’est un projet sur lequel je travaille depuis " +
      "3 ans. De simple MVP (Minimum Viable Product – Produit Minimum Viable) où je travaillais seul, ce " +
      "projet est passé à un projet d’envergure qui mobilise une équipe de 5 développeurs. Dans cette équipe, " +
      "j’occupe le rôle de Tech Lead : c’est à moi qu’il revient de prendre les choix technologiques et " +
      "d’assister le client dans sa gestion du projet."
    ]),
    new Divider(),

    new Title("Seul à la barre", 2),
    new Paragraph([
      "Lorsque j’ai commencé à développer cette application en 2017, j’étais le seul développeur actif. " +
      "Cependant, je ne gérais pas la totalité du projet puisque c’était mon tuteur de stage qui s’occupait " +
      "de valider les choix techniques et des interactions plus administratives avec mon client. Le but de " +
      "cette itération était comme indiqué ci-dessus de produire un MVP, le client souhaitant s’assurer de la " +
      "faisabilité de son projet et ne voulant pas trop investir avant d’avoir pu démarcher de potentiels " +
      "clients à l’aide de ce dernier.",

      "Pour répondre à ses besoins, affichage de points d’intérêt sur une carte personnalisée, le choix a été " +
      "fait d’utiliser Angular avec OpenLayers comme moteur de rendu cartographique. A la fin du développement " +
      "le client était très satisfait et a accepté le MVP. Aujourd’hui, il est amusant de relever que dernier " +
      "est très éloigné en fonctionnalités de ce qu’est devenue la plateforme."
    ]),

    new Title("Changement de bord", 2),
    new Paragraph(
      "Après une version initiale n’étant capable que d’afficher des points d’intérêt sur une carte, le choix " +
      "a été fait de réaliser l’intégration de l’affichage de relevés tridimensionnels dans la plateforme. " +
      "C’était la première évolution majeure demandée par le client suite à ses démarchages. Je me suis occupé " +
      "de cette intégration puisque j’étais toujours le seul développeur. L’affichage du modèle 3D a été́ " +
      "réalisé́ avec THREE.js et plus précisément la librairie Potree qui permet la conversion des modèles 3D " +
      "vers un format utilisable sur un navigateur web. J’ai également intégré la streetview fournie par " +
      "Google pour aider les utilisateurs à se repérer dans l’espace. Afin de faciliter le développement de " +
      "l’interface graphique, il a également été décidé d’utiliser le package ngPrimeFace qui fournit des " +
      "composants graphiques pour Angular. J’ai réalisé le développement de ces nouvelles fonctionnalités sur " +
      "une période de 10 mois au début de mon alternance au sein de Signature-Code."
    ),

    new Divider(),
    new Title("FirstDown MVP", 2),
    new Image(this.assetsRoot + 'firstdown_2018.png', 'FirstDown en 2018'),
    new Divider(),

    new Title("Sortez les voiles!", 2),
    new Paragraph(
      "Suite à ces deux prototypes, le client a décidé de lancer le projet d’une plateforme pérenne. Au lieu " +
      "de petits sites développés spécifiquement pour chaque démarchage, il n’y aurait plus qu’un site qui " +
      "regrouperait l’intégralité des projets, en interne ce projet portait pour nom de code FirstDown. J’ai " +
      "donc remis tout le projet à plat et j’ai commencé le développement de ce nouveau site toujours sous " +
      "Angular. Toutefois, il y avait deux différences majeures : le framework graphique employé était " +
      "désormais NgZorro afin d’être plus assorti aux autres sites déjà développés pour le client, la seconde " +
      "différence qui n’est pas des moindres était l’ajout d’un serveur en C#. Finies les applications client " +
      "autonomes, FirstDown était désormais une plateforme complexe multi-utilisateurs."
    ),

    new Title("L'équipage à la rescousse", 2),
    new Paragraph([
      "Depuis cette date de lancement de FirstDown en 2018, la plateforme n’a cessé de croître. Elle permet " +
      "désormais la gestion d’utilisateurs multiples répartis dans différentes entreprises. En termes de " +
      "fonctionnalités techniques, il est désormais possible d’afficher les relevés de réseaux, de créer et de " +
      "partager différentes mesures ainsi que d’exporter directement depuis le navigateur des extractions des " +
      "modélisations 3D.",

      "Afin d’accroître la vélocité du développement, d’autres développeurs m’ont rejoint. Tout d’abord ce " +
      "sont consécutivement deux stagiaires que j’ai formés et encadrés sur la plateforme qui se sont joints à " +
      "moi, puis petit à petit l’équipe a grossi pour devenir ce qu’elle est aujourd’hui : une équipe de 5 " +
      "développeurs. Dans cette équipe j’ai le rôle de Tech Lead. Certes, cela me laisse moins de temps pour " +
      "le développement pur, mais cela m’a permis de me former sur d’autres aspects tels que la gestion " +
      "d’équipe, la gestion de projets et la méthodologie SCRUM, une méthode agile pour le développement " +
      "informatique."
    ]),

    new Divider(),
    new Title("FirstDown moderne", 2),
    new Image(this.assetsRoot + 'firstdown_2020.png', 'FirstDown en 2020'),
  ];
}
