import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerarquiaPage } from './jerarquia.page';

const routes: Routes = [
  {
    path: '',
    component: JerarquiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JerarquiaPageRoutingModule {}
