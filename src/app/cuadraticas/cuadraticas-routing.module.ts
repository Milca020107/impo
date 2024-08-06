import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadraticasPage } from './cuadraticas.page';

const routes: Routes = [
  {
    path: '',
    component: CuadraticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadraticasPageRoutingModule {}
