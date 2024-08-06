import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumarestPage } from './sumarest.page';

const routes: Routes = [
  {
    path: '',
    component: SumarestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumarestPageRoutingModule {}
