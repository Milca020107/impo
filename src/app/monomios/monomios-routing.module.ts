import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonomiosPage } from './monomios.page';

const routes: Routes = [
  {
    path: '',
    component: MonomiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonomiosPageRoutingModule {}
