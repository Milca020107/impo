import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcuacionesPage } from './ecuaciones.page';

const routes: Routes = [
  {
    path: '',
    component: EcuacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcuacionesPageRoutingModule {}
