import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';

export class Autonomy extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/transversals/autonomy/';

    constructor() {
        super();
    }

    public readonly title: string = 'Organisation et Autonomie';
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Transversal;

    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "Être indépendant en entreprise s'apprend et est un atout essentiel"
    
    public readonly routerLink: string = 'autonomy';
    public readonly tags: ReadonlyArray<string> = [];
    
    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph(
            "Organisation et Autonomie sont les clefs de l'indépendance en entreprise. Il convient tout d'abord de " +
            "préciser que cet article concerne l'indépendance en entreprise. Il s'agit plus précisément de " +
            "l’indépendance dans l'entreprise au niveau de l'individu et non l’indépendance vis-à-vis des entreprises."
        ),
        new Divider(),

        new Title("L'indépendance", 2),
        new Paragraph([
            "L’indépendance en entreprise est un moyen d’alléger la surcharge d’obligations dîtes plus " +
            "administratives. Par exemple, un manager ayant confiance en un acteur d’un projet (donc d’un " +
            "développeur seul ou bien d’une équipe à part entière) peut diminuer le nombre de réunions et/ou de " +
            "suivis.",

            "En effet, l’acteur étant autonome, certaines décisions vont être prises de facto en amont. Il est donc " +
            "possible de restreindre les sujets abordés lors de ces moments de rencontres. Les réunions ayant " +
            "mauvaise réputation, (une majorité des acteurs du monde du travail en France se plaignent d’une " +
            "réunionite aigüe et leur tenue empêchant de se focaliser sur la réalisation de ses tâches pendant un " +
            "important laps de temps avant et après cette dernière), les diminuer induit le plus souvent une " +
            "augmentation de la productivité des acteurs concernés."
        ]),
        new Title("Limites", 3),
        new Paragraph([
            "Toutefois, trop de liberté peut également nuire à ce même acteur. En l’absence de règles et de cadres " +
            "clairement définis, il est aisé de se perdre. Il est donc essentiel d’avoir un guide, un garde-fou pour " +
            "l’esprit errant.",

            "En entreprise, avec une organisation Agile, cela se matérialise par le Scrum Master qui réalise des " +
            "points avec l’équipe afin de vérifier que les tâches réalisées sont bien celles attendues et que " +
            "l’avancement global correspond aux estimations. Ainsi, dans le cas de l’indépendance en entreprise, " +
            "c’est donc l’organisation qui est ce garde-fou."
        ]),
        new Title("Un garde-fou flexible", 3),
        new Paragraph([
            "L’organisation se doit d’être un garde-fou flexible. Il ne faut pas bloquer le processus comme une rame " +
            "ferroviaire sur des rails. Certes la rame peut se déplacer librement, mais uniquement là où il y a " +
            "l’infrastructure pour. Il faut concevoir l’organisation comme une carte, une carte géographique qui " +
            "indique clairement les grands chemins, mais également les méandres alternatifs aux voyageurs les plus " +
            "attentifs, leur permettant d’emprunter des voies non conventionnelles.",

            "Cette organisation est aussi une carte à jouer, un joker permettant de s’affirmer et d’augmenter les " +
            "possibilités que l’on nous offre. Présenter la maîtrise de cette compétence à un manager augmentera la " +
            "tolérance que ce dernier nous accorde."
        ]),

        new Divider(),
        new Title("Expérience personnelle", 2),
        new Paragraph([
            "Avant de travailler en entreprise, j’ai déjà eu la chance de travailler sur un projet conséquent en " +
            "quasi-totale autonomie (RedPandaUI). Cependant, durant ce projet, je n’avais pas de référent, c’était " +
            "à moi de définir les priorités et c’était la communauté qui influençait ces choix. Ainsi, j'ai pu durant " +
            "ce projet sentir l'importance de l'orgnisation de par son absence. Mes choix étant influencés, je " +
            "modifiais parfois mes objectifs plusieurs fois par semaine ce qui diminuait la productivité car je " +
            "n'étais pas capable de m'organiser face aux attentes en perpetuelle évolution de la communauté.",

            "Toutefois, en entreprise, lors d’un projet réalisé seul au cours de plusieurs mois, j’ai dû apprendre à " +
            "m’organiser de mieux en mieux, améliorant ainsi ma prise de décision. En effet, je devais respecter des " +
            "deadlines qui demandaient de remplir un ensemble de critères d’acceptation. Respecter ces dernières avec " +
            "de plus en plus d’efficacité m’a permis de gagner une forme d’indépendance où j’ai pu développer mon " +
            "projet avec un regard moins constant des suiveurs du projet. Cependant, cette liberté a apporté " +
            "avantages et désavantages. Certes, il n’y avait plus de réunions journalières et on ne se sentait plus " +
            "tenu par la main, mais il n’y avait plus de reconnaissance directe de l’état d’avancement,ce qui pouvait " +
            "entrainer une baisse de la motivation."
        ])
    ];
}