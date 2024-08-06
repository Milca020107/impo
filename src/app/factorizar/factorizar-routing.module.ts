import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorizarPage } from './factorizar.page';

const routes: Routes = [
  {
    path: '',
    component: FactorizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorizarPageRoutingModule {}
