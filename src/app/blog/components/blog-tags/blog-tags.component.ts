import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

interface TagDetails {
  label: string;
  active: boolean;
}

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

  @ViewChild('tagInput', { static: true }) tagInputElement: ElementRef;

  public activeTags: string[];

  public tagInputValue: string;
  public tagsSuggestions: string[];

  public displayDrawer: boolean;
  public detailedTags: TagDetails[];

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tagInputValue = '';
    this.activeTags = this.defaultActiveTags;
    this.updateTagsSuggestions();
    this.updateDetailedTags();
    this.displayDrawer = false;
  }

  addTag() {
    this.parseTagInput();
    this.ref.markForCheck();
  }

  addTags() {
    for (const tag of this.allTags) {
      const isSelected = this.detailedTags.findIndex(v => v.active && v.label === tag) !== -1;
      const wasSelected = this.activeTags.includes(tag);
      if (isSelected === wasSelected) continue;
      if (isSelected) this.activeTags.push(tag);
      else this.activeTags.splice(this.activeTags.indexOf(tag), 1);
    }

    this.tagsChange.emit(this.activeTags);

    this.displayDrawer = false;
    this.updateTagsSuggestions();
    this.updateDetailedTags();
    this.ref.markForCheck();
  }

  acceptSuggestion() {
    setTimeout(() => {
      this.parseTagInput();
      (<HTMLInputElement>this.tagInputElement.nativeElement).blur();
      this.ref.markForCheck();
    });
  }

  removeTag(index: number) {
    this.activeTags.splice(index, 1);
    this.tagsChange.emit(this.activeTags);

    this.updateTagsSuggestions();
    this.updateDetailedTags();
    this.ref.markForCheck();
  }

  updateTagsSuggestions() {
    this.tagsSuggestions = this
      .allTags
      .filter(tag =>
        !this.activeTags.includes(tag)
        && tag.toLocaleLowerCase().includes(this.tagInputValue.toLocaleLowerCase())
      );
  }

  private parseTagInput() {
    if (this.tagInputValue && this.tagsSuggestions.includes(this.tagInputValue)) {
      this.activeTags = [...this.activeTags, this.tagInputValue];
      this.tagsChange.emit(this.activeTags);
    }

    this.tagInputValue = '';
    this.updateTagsSuggestions();
    this.updateDetailedTags();
  }

  private updateDetailedTags() {
    this.detailedTags = this.allTags.map(tag => ({ label: tag, active: this.activeTags.includes(tag) }));
  }
}
