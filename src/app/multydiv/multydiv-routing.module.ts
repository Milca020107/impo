import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultydivPage } from './multydiv.page';

const routes: Routes = [
  {
    path: '',
    component: MultydivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultydivPageRoutingModule {}
