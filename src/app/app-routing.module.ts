import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';
import { registerScrollEventHandler } from './core/routes/scroll-event-handler';

const routingConfiguration: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    router: Router,
  ) {
    registerScrollEventHandler(router);
  }
}

