import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PictogramaPage } from './pictograma.page';

const routes: Routes = [
  {
    path: '',
    component: PictogramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictogramaPageRoutingModule {}
