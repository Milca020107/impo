import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaEcPage } from './sistema-ec.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaEcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaEcPageRoutingModule {}
