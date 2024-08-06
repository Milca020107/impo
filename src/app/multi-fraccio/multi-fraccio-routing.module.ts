import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiFraccioPage } from './multi-fraccio.page';

const routes: Routes = [
  {
    path: '',
    component: MultiFraccioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiFraccioPageRoutingModule {}
