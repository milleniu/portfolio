import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogTagsComponent implements OnInit {

  @Input('tags') public allTags: string[];
  @Input('default') public defaultActiveTags?: string[] = [];

  @Output() public tagsChange = new EventEmitter<string[]>();

  public activeTags: string[];
  public tagsSuggestions: string[];
  public tagInput: string;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tagInput = '';
    this.activeTags = this.defaultActiveTags;
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
      .allTags
      .filter(tag =>
        !this.activeTags.includes(tag)
        && tag.toLocaleLowerCase('fr-FR').includes(this.tagInput.toLocaleLowerCase('fr-FR'))
      );
  }
}
