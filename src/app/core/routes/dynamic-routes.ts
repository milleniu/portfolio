import { Routes, Route, Router } from '@angular/router';

import { blogPostRepository } from '../data/blog-post-repository';
import { BlogPageComponent } from 'src/app/blog/pages/blog-page/blog-page.component';

function getBlogDynamicRoutes(): Routes {
    return Object
        .keys(blogPostRepository)
        .map<Route>(path => ({ path, component: BlogPageComponent }))
}

export function registerDynamicRoutes(router: Router) {
    const routerConfigSnapshot = router.config;
    const dynamicRoutesConfig = getBlogDynamicRoutes();
    router.resetConfig([ ...dynamicRoutesConfig, ...routerConfigSnapshot ]);
}