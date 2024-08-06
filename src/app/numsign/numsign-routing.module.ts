import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumsignPage } from './numsign.page';

const routes: Routes = [
  {
    path: '',
    component: NumsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumsignPageRoutingModule {}
