import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightsPage } from './rights.page';

const routes: Routes = [
  {
    path: '',
    component: RightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightsPageRoutingModule {}
