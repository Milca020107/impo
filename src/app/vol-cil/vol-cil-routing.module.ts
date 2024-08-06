import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolCilPage } from './vol-cil.page';

const routes: Routes = [
  {
    path: '',
    component: VolCilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolCilPageRoutingModule {}
