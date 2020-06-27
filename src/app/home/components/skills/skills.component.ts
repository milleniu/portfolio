import { Component, OnInit, Input } from '@angular/core';
import { BlogPostCategory } from 'src/app/core/models/blog-post.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  @Input('skill') public skill: BlogPostCategory;

  public get title(): string {
    return this.skill.label;
  }

  public get imgSource(): string {
    return `assets/home/skills/${this.skill.path}.jpg`;
  }

  public get link(): string {
    return `/blog/${this.skill.path}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
