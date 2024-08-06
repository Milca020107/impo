import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimetriaPage } from './simetria.page';

const routes: Routes = [
  {
    path: '',
    component: SimetriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimetriaPageRoutingModule {}
