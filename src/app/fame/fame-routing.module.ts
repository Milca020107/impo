import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamePage } from './fame.page';

const routes: Routes = [
  {
    path: '',
    component: FamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamePageRoutingModule {}
