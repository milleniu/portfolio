import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject, Output, EventEmitter } from '@angular/core';
import { BlogPostRepository, BlogPost } from 'src/app/core/models/blog-post.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogTagsComponent implements OnInit {

  @Output() public tagsChange = new EventEmitter<string[]>();

  private _allTags: string[];

  public activeTags: string[];
  public tagsSuggestions: string[];
  public tagInput: string;

  constructor(
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const getAllTagsFromPosts = (posts: ReadonlyArray<BlogPost>): string[] => {
      const set = new Set<string>();
      for (const post of posts)
        for (const tag of post.tags)
          if (!set.has(tag))
            set.add(tag);
      return [...set.values()];
    }

    this._allTags = getAllTagsFromPosts(this.blogPostRepository.get());
    this.tagInput = '';
    this.activeTags = []; // TODO: Set from query

    this.updateTagsSuggestions();
  }

  addTag() {
    if (this.tagInput && this.tagsSuggestions.includes(this.tagInput)) {
      this.activeTags = [...this.activeTags, this.tagInput];
      this.tagsChange.emit(this.activeTags);
    }

    this.tagInput = '';
    this.updateTagsSuggestions();

    this.ref.markForCheck();
  }

  removeTag(index: number) {
    this.activeTags.splice(index, 1);
    this.tagsChange.emit(this.activeTags);

    this.updateTagsSuggestions();

    this.ref.markForCheck();
  }

  updateTagsSuggestions() {
    this.tagsSuggestions = this
      ._allTags
      .filter(tag =>
        !this.activeTags.includes(tag)
        && tag.toLocaleLowerCase('fr-FR').includes(this.tagInput.toLocaleLowerCase('fr-FR'))
      );
  }
}
