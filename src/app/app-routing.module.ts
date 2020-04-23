import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

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
export class AppRoutingModule { }

