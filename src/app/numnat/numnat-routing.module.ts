import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumnatPage } from './numnat.page';

const routes: Routes = [
  {
    path: '',
    component: NumnatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumnatPageRoutingModule {}
