import { ElementRef, ViewRef } from '@angular/core';

export interface NavbarItem {
  label: string;
  navigationTarget: { routerLink: string | string[], fragment?: string }
  viewRef?: ElementRef;
  children?: ReadonlyArray<NavbarItem>;
  configuration?: (item: SelectableNavbarItem) => void;
}

export type SelectableNavbarItem = NavbarItem & { selected: boolean };

type LabelInfer<T extends { label: string }> = T['label'];
type ChildrenInfer<T> = T extends { children: infer C } ? C : never;
type NavbarItemInfer = typeof DefaultNavigationTargets[number];
type NavbarItemLabelUnion = LabelInfer<NavbarItemInfer> | LabelInfer<ChildrenInfer<NavbarItemInfer>[number]>;

export type NavbarItemViewRefCollection = { [label in NavbarItemLabelUnion]?: ElementRef; };
export interface NavbarItemConfiguration {
  key: NavbarItemLabelUnion,
  configuration: (item: SelectableNavbarItem) => void;
}

const DefaultNavigationTargets = [
  {
    label: 'Accueil',
    navigationTarget: { routerLink: '/home', fragment: 'hero' },
    children: [
      {
        label: 'À Propos',
        navigationTarget: { routerLink: '/home', fragment: 'about' },
      },
      {
        label: 'Compétences',
        navigationTarget: { routerLink: '/home', fragment: 'skills' },
      },
      {
        label: 'Publications',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' },
      }
    ]
  },
  {
    label: 'Mes Compétences',
    navigationTarget: { routerLink: '/skills' },
    children: [
      {
        label: 'Techniques',
        navigationTarget: { routerLink: '/blog/technical' }
      },
      {
        label: 'Transversales',
        navigationTarget: { routerLink: '/blog/transversal' }
      }
    ]
  },
  {
    label: 'Réalisations',
    navigationTarget: { routerLink: '/blog/realization' }
  }
] as const;

export function getDefaultNavigationTargets(
  viewRefCollection?: NavbarItemViewRefCollection,
  configurations?: NavbarItemConfiguration[]
): ReadonlyArray<NavbarItem> {
  
  const configureDefault = (navbarItems: ReadonlyArray<NavbarItem>) => {
    for (const navbarItem of navbarItems) {
      navbarItem.viewRef = !!viewRefCollection
        ? viewRefCollection[navbarItem.label]
        : undefined;

      const filtered = (configurations || [])
        .filter(item => item.key === navbarItem.label)
        .map(item => item.configuration);
      if( filtered.length === 0 ) navbarItem.configuration = undefined;
      if( filtered.length === 1 ) navbarItem.configuration = filtered[0];
      navbarItem.configuration = item => filtered.forEach(c => c(item));

      if (!!navbarItem.children)
        configureDefault(navbarItem.children);
    }
  }

  configureDefault(DefaultNavigationTargets);
  return DefaultNavigationTargets;
};