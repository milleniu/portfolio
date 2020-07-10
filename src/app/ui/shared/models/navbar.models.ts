import { ElementRef, ViewRef } from '@angular/core';

type Label = { label: string };
type RouterLink = { routerLink: string };
type RouterFragment = { fragment?: string };
type Selectable = { selected: boolean };

type NavigationTarget = RouterLink & RouterFragment;

export interface NavbarItem {
  label: string;
  navigationTarget: NavigationTarget
  viewRef?: ElementRef;
  children?: ReadonlyArray<NavbarItem>;
  configuration?: (item: SelectableNavbarItem) => void;
}

export type SelectableNavbarItem = NavbarItem & Selectable;

type LabelInfer<T extends Label> = T['label'];
type ChildrenInfer<T> = T extends { children: infer C } ? C : never;
type NavbarItemInfer = typeof DefaultNavigationTargets[number];

export type NavbarItemLabelUnion = LabelInfer<NavbarItemInfer> | LabelInfer<ChildrenInfer<NavbarItemInfer>[number]>;
export type NavbarItemViewRefCollection = { [label in NavbarItemLabelUnion]?: ElementRef; };
export interface NavbarItemConfiguration {
  key: NavbarItemLabelUnion,
  configuration: (item: SelectableNavbarItem) => void;
  accept?: (item: SelectableNavbarItem) => boolean;
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
        label: 'Réalisations',
        navigationTarget: { routerLink: '/home', fragment: 'blog-posts' },
      }
    ]
  },
  {
    label: 'Mon Parcours',
    navigationTarget: { routerLink: '/experiences' }
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
    label: 'Mes Réalisations',
    navigationTarget: { routerLink: '/blog/realization' }
  },
  {
    label: 'Contact',
    navigationTarget: { routerLink: '/contact' }
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

      const filtered = (configurations || []).filter(item => item.key === navbarItem.label);
      if( filtered.length === 0 ) {
        navbarItem.configuration = (_) => {};
      } else if( filtered.length === 1 ) {
        const single = filtered[0];
        navbarItem.configuration = item => {
          if( !single.accept || single.accept(item) )
            single.configuration(item)
        };
      } else {
        navbarItem.configuration = item => {
          filtered
            .filter(single => !single.accept || single.accept(item))
            .forEach(single => single.configuration(item));
        };
      }

      if (!!navbarItem.children)
        configureDefault(navbarItem.children);
    }
  }

  configureDefault(DefaultNavigationTargets);
  return DefaultNavigationTargets;
};
