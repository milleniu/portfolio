import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { HeroAreaComponent } from '../../components/hero-area/hero-area.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { BlogSectionComponent } from '../../components/blog-section/blog-section.component';
import { NavbarItem, getDefaultNavigationTargets } from 'src/app/ui/shared/models/navbar.models';
import { BlogPost, BlogPostRepository } from 'src/app/core/models/blog-post.models';
import { BLOG_POST_REPOSITORY } from 'src/app/core/config/injection-tokens';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  @ViewChild(HeroAreaComponent, { read: ElementRef, static: true }) heroAreaComponentRef: ElementRef;
  @ViewChild(AboutSectionComponent, { read: ElementRef, static: true }) aboutComponentRef: ElementRef;
  @ViewChild(SkillsSectionComponent, { read: ElementRef, static: true }) skillsComponentRef: ElementRef;
  @ViewChild(BlogSectionComponent, { read: ElementRef, static: true }) blogSectionComponentRef: ElementRef;

  public posts: ReadonlyArray<BlogPost>;

  public get navigationTargets(): ReadonlyArray<NavbarItem> {
    return getDefaultNavigationTargets({
      Accueil: this.heroAreaComponentRef,
      'À Propos': this.aboutComponentRef,
      'Compétences': this.skillsComponentRef,
      'Publications': this.blogSectionComponentRef,
    });
  }

  constructor(
    @Inject(BLOG_POST_REPOSITORY) private blogPostRepository: BlogPostRepository,
  ) { }

  ngOnInit() {
    this.posts = this.blogPostRepository.get(6);
  }
}
