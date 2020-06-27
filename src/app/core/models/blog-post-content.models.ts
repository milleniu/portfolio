export interface BlogPostContent {
    renderHTML(): string;
};

export class Title implements BlogPostContent {
    constructor(
        private title: string,
        private level: number
    ) { }

    renderHTML(): string {
        return `<h${this.level}>${this.title}</h${this.level}>`;
    }
}

export class Paragraph implements BlogPostContent {
    constructor(
        private content: string | string[]
    ) { }

    renderHTML(): string {
        return this.content instanceof Array
            ? this.content.map(content => `<p>${content}</p>`).join('')
            : `<p>${this.content}</p>`;
    }
}

export class List implements BlogPostContent {
    constructor(
        private items: Array<string | string[]>
    ) { }

    renderHTML(): string {
        const sb = [];
        List.renderHTMLWithSB(this.items, sb);
        return sb.join('');
    }

    private static renderHTMLWithSB(items: Array<string | string[]>, sb: string[]): string[] {
        sb.push('<ul>');

        items.forEach(item => {
            if (item instanceof Array) List.renderHTMLWithSB(item, sb);
            else sb.push(`<li>${item}</li>`);
        })

        sb.push('</ul>');

        return sb;
    }
}

export class Image implements BlogPostContent {
    constructor(
        private imagePath: string,
        private altText: string
    ) { }

    renderHTML(): string {
        return `<p><img src="${this.imagePath}" alt="${this.altText}"></p>`;
    }
}

export class Divider implements BlogPostContent {
    renderHTML(): string {
        return `<hr>`
    }
}