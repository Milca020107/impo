import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimPage } from './prim.page';

const routes: Routes = [
  {
    path: '',
    component: PrimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimPageRoutingModule {}
