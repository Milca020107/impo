import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FracciocompaPage } from './fracciocompa.page';

const routes: Routes = [
  {
    path: '',
    component: FracciocompaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FracciocompaPageRoutingModule {}
