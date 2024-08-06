import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbabilidadPage } from './probabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ProbabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbabilidadPageRoutingModule {}
