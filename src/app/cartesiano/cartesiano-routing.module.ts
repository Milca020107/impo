import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartesianoPage } from './cartesiano.page';

const routes: Routes = [
  {
    path: '',
    component: CartesianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartesianoPageRoutingModule {}
