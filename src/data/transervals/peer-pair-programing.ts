import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Divider, Paragraph, Title, List } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';

export class PeerPairPrograming extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/transversals/peer-pair-programing/';

    constructor() {
        super();
    }

    public readonly title: string = 'Peer et Pair Programing';
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Transversal;

    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "Dans les équipes de développement informatique, on distingue deux grandes méthodologies : le peer-programing et le pair-programing.";
    
    public readonly routerLink: string = 'peer-pair-programming';
    public readonly tags: ReadonlyArray<string> = [];

    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph(
            "Dans les équipes de développement informatique, on distingue deux grandes philosophies de " +
            "communication permettant d’assurer la cohésion et la qualité du travail : le peer programing et le " +
            "pair programing."
        ),
        new Divider(),

        new Title("Peer Programing", 2),
        new Paragraph([
            "Le peer-programming caractérise la pratique consistant à passer en revue le code d’un développeur une " +
            "fois que celui-ci a terminé d’implémenter une fonctionnalité. Le but de cette démarche est d’éviter de " +
            "laisser passer des erreurs d’étourderie et de pouvoir faire des retours sur l’architecture du code.",

            "Cette technique possède plusieurs avantages :"
        ]),
        new List([
            "Lors de cette étape de revue, il est possible d’appeler un spécialiste du sujet. Ainsi, si le développeur a par exemple altéré du code touchant à la base de données, il peut demander à un expert en la matière de valider la production.",
            "Le processus du développeur n’est pas fortement impacté, il continue de travailler selon ses habitudes.",
            "C’est une démarche qui s’adapte parfaitement pour des équipes distribuées et/ou dynamiques : il est asynchrone, le décalage horaire n’est donc pas bloquant.",
            "Elle est collaborative : les conversations sont publiques et archivées en ligne."
        ]),
        new Paragraph(
            "Cependant cette démarche comporte néanmoins des inconvénients :"
        ),
        new List([
            "Puisque les développeurs travaillent presque isolés les uns des autres, travailler sur un sujet qui est dépendant d’un autre développement actif peut être compliqué.",
            "Il y a un délai entre le moment où le travail est terminé et le moment durant lequel il est passé en revue, ce laps de temps peut impacter négativement la production.",
            "Si la revue concerne beaucoup de changements, elle va être coûteuse en temps et en effort pour être complétée.",
            "Enfin c’est une démarche qui fonctionne si on laisse son ego à la porte, les retours pouvant être involontairement cinglants."
        ]),

        new Title("Peer Programing", 2),
        new Paragraph([
            "C’est pourquoi une seconde démarche a fait son apparition dans le secteur de l’informatique : le " +
            "pair-programming. Cette dernière a pour but de faire collaborer deux développeurs sur un même sujet en " +
            "les faisant travailler en même temps sur le même poste. On pourrait la qualifier de « passage en revue " +
            "du code et du design en temps réel ».",

            "Elle possède de nombreux avantages :"
        ]),
        new List([
            "Elle peut être fait en physique, deux développeurs qui se partagent un même ordinateur et un même clavier ou bien à distance avec un logiciel de partage ou de contrôle à distance.",
            "Ce procédé offre une excellente méthode d’intégration pour des juniors, des mentors pouvant leur être assignés. Ainsi, il est possible, en plus d’analyser son code, d’analyser ses méthodes de travail pour améliorer son expérience.",
            "La revue se fait ici instantanément, une mauvaise décision pourra être relevée plus tôt évitant le phénomène de « confiance absolue en son code », un phénomène où le développeur d’un composant d’un programme aura plus de difficultés à relever les erreurs du fait qu’il en est le créateur.",
            "C’est également une méthode moins hiérarchisée, ce ne sont plus les connaissances contre les connaissances lors de la revue mais les connaissances avec les connaissances lors du développement."
        ]),
        new Paragraph(
            "Cependant cette méthode de travail présente, elle aussi, des défauts :"
        ),
        new List([
            "Il faut faire attention à ce que les mentors ne prennent pas la main sur les juniors lors de collaborations et ne les entravent, plus qu’ils ne les aident.",
            "Il ne faut pas laisser l’équipe développer des petites ou simples fonctionnalités en tant que paires car cela serait une perte de temps, cette démarche doit être réservée à des tâches plus complexes.",
            "Il ne faut pas forcer d’équipes, deux développeurs aux démarches radicalement opposées ne pourront pas collaborer efficacement et c’est pour cette même raison qu’il faut faire tourner ces paires régulièrement.",
            "Enfin à l’instar de la première stratégie, ce n’est pas un combat d’ego, il faut faire attention à ce qu’un développeur n’en écrase pas un autre."
        ]),

        new Divider(),
        new Title("Peer ou Pair", 2),
        new Paragraph([
            "De nos jours, afin de gérer efficacement des équipes, il est essentiel de connaître ces deux " +
            "philosophies majeures, mais surtout de savoir les utiliser à bon escient.",

            "Dans mon cadre professionnel, j’utilise quotidiennement ces deux modes de communication. Lorsque je " +
            "suis positionné sur un sujet pour lequel je suis expert, j’utilise le pair-programming pour intégrer " +
            "les stagiaires. Sur l’un de mes projets 3D, je partage l’ordinateur avec mon stagiaire. Cela facilite " +
            "la prise en charge, l’échange. C’est une excellente solution pour transmettre facilement des " +
            "compétences à un junior.",

            "Dans le cadre commercial, j’utilise le peer-programming notamment dans le cadre de validation " +
            "d’algorithmes. Je travaille avec un développeur d’une autre société pour répondre à la commande d’une " +
            "troisième société. Ainsi, nous nous trouvons régulièrement à devoir valider ou non, le travail de " +
            "chacun. J’ai appris à recevoir des avis parfois cinglants sans pour autant réagir avec véhémence, j’ai " +
            "également appris à émettre des refus de validation et des avis négatifs, situation qui était complexe " +
            "pour moi auparavant."
        ])
    ];

}