import { BlogPostBase } from '../models/blog-post-base';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';
import { BlogPostContent, Paragraph, Divider, Title } from 'src/app/core/models/blog-post-content.models';
import { WellKnownBlogPostCategory } from '../blog-post-category';

export class KayakerExperience extends BlogPostBase {
    private readonly assetsRoot = 'assets/blog/transversals/kayaker-experience/';
    
    constructor() {
        super();
    }
    
    public readonly title: string = "Expérience d'un kayakiste";
    public readonly category: BlogPostCategory = WellKnownBlogPostCategory.Transversal;
    
    public readonly coverImage: string = this.assetsRoot + 'cover.svg';
    public readonly description: string = "Quels sont les points communs entre le parcours d'un développeur et le parcours d'un kayakiste ?";
    
    public readonly routerLink: string = 'kayaker-experience';
    public readonly tags: ReadonlyArray<string> = [];

    public readonly content: ReadonlyArray<BlogPostContent> = [
        new Paragraph([
            "Quelles interactions existe-t-il entre le développement informatique et le kayak de haute rivière ?",

            "Le kayak de haute rivière tout comme le monde professionnel dans lequel je gravite est un monde de " +
            "projets collectifs. Descendre une rivière sportive engagée, ce n’est pas seulement utiliser les  " +
            "capacités techniques individuelles, c’est se donner les moyens d’arriver tous en bas sans accident."
        ]),
        new Divider(),

        new Title("L'individualité collective", 2),
        new Paragraph(
            "Au départ, en tant que débutant, il faut intégrer un groupe. Bien que le kayak soit une embarcation " +
            "individuelle, la navigation ne peut se faire qu’en groupe pour des raisons de sécurité. Indépendamment " +
            "du niveau technique de chacun, la sécurité est l’œuvre de tous. Chacun doit avoir en permanence un " +
            "regard sur les autres pour s’assurer qu’ils ne soient pas en difficulté. Sur certains passages " +
            "présentant de grands risques, il est nécessaire de mettre en œuvre une sécurité : chacun va devoir à son " +
            "tour descendre du kayak, s’encorder, entrer dans l’eau glacée afin d’épauler un coéquipier pour, soit le " +
            "remettre dans la bonne trajectoire, soit le récupérer ou le sortir de l’eau en se jetant soi-même " +
            "encordé dans les rapides. Ainsi, un projet de descente d’une rivière particulièrement engagée peut " +
            "exiger de limiter le parcours à la participation des experts. Avant d’arriver à ce niveau, il y a des " +
            "étapes à franchir et l’émulation de groupe ainsi que l’observation et la réappropriation de la " +
            "technique des plus avancés et des plus performants permet et favorise le dépassement de soi. Petit à " +
            "petit, le junior va se hisser au niveau de l’expertise requise. Pour descendre certaines rivières d’un " +
            "bout à l’autre, afin d’éviter de se mettre lui-même en danger ou de provoquer une situation " +
            "d’insécurité pour le groupe, il sera parfois contraint de mettre pied à terre, et de porter son kayak " +
            "pendant que les autres glissent sur l’eau. Mais avec le temps, l’entrainement et l’interaction " +
            "bienveillante et constructive de son club, il pourra naviguer sans interruption."
        ),

        new Title("Être kaykiste, un atout", 2),
        new Paragraph(
            "C’est fort de mon expérience de kayakiste que, durant ma formation à Intech’Info, j’ai rejoint " +
            "Invenietis en 2017, d’abord en tant que simple stagiaire, puis en tant qu’alternant en 2018. Le choix " +
            "pour cette entreprise était motivé par l’environnement entrepreneurial, une entreprise à taille humaine " +
            "où j’allais pouvoir expérimenter plusieurs postes et explorer de multiples facettes du métier de " +
            "développeur et m’appuyer sur un petit groupe structuré et bienveillant, plutôt qu’isolé dans une grande " +
            "entreprise. Ma montée en compétences en développement d’algorithmes ainsi que l’accession progressive à " +
            "mon autonomie a suivi le même chemin que celui de ma montée en puissance en kayak : de simple débutant " +
            "ou exécutant parfois en difficulté observant les experts, j’ai pu évoluer à un rôle d’accompagnateur ou " +
            "de formateur vers celui de leadership en kayak et de TechLead professionnellement. "
        ),

        new Divider(),
        new Paragraph(
            "Mon expérience de kayakiste m’a donné de nombreuses forces que j’ai très rapidement exploitées " +
            "professionnellement : mon expérience d’encadrant m’a permis d’endosser naturellement le rôle de " +
            "formateur auprès de stagiaires et surtout, j’ai très vite compris, accepté et utilisé la force d’un " +
            "groupe pour atteindre un objectif commun, en m’assurant que personne ne restait sur le bord de la " +
            "rivière."
        )
    ];
}