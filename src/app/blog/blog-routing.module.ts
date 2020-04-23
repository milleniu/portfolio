import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { registerDynamicRoutes } from '../core/routes/dynamic-routes';

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
