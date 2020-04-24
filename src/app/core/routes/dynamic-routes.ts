import { Routes, Router } from '@angular/router';

export function registerDynamicRoutes(router: Router, getDynamicRoutes: () => Routes) {
    router.resetConfig([ ...getDynamicRoutes(), ...router.config ]);
}