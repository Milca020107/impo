import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumenRectPage } from './volumen-rect.page';

const routes: Routes = [
  {
    path: '',
    component: VolumenRectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumenRectPageRoutingModule {}
