import { ElementRef } from '@angular/core';

export interface NavbarItem {
  label: string;
  navigationTarget: { routerLink: string, fragment?: string }
  viewRef?: ElementRef;
}

export type NavbarItemDefault = 'home' | 'about' | 'skills' | 'posts';
export type NavbarItemViewRefCollection = { [label in NavbarItemDefault]?: ElementRef; };

export function getDefaultNavigationTarget(
  viewRefCollection?: NavbarItemViewRefCollection
): NavbarItem[] {
  const resolveViewRef = (label: NavbarItemDefault) => {
    return !viewRefCollection ? undefined : viewRefCollection[label];
  }

  return [
    {
      label: 'Accueil',
      navigationTarget: { routerLink: '/home', fragment: 'hero' },
      viewRef: resolveViewRef('home')
    },
    {
      label: 'À Propos',
      navigationTarget: { routerLink: '/home', fragment: 'about' },
      viewRef: resolveViewRef('about')
    },
    {
      label: 'Compétences',
      navigationTarget: { routerLink: '/home', fragment: 'skills' },
      viewRef: resolveViewRef('skills')
    },
    {
      label: 'Publications',
      navigationTarget: { routerLink: '/home', fragment: 'blog-posts' },
      viewRef: resolveViewRef('posts')
    }
  ]
};