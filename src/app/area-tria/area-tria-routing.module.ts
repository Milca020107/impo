import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaTriaPage } from './area-tria.page';

const routes: Routes = [
  {
    path: '',
    component: AreaTriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaTriaPageRoutingModule {}
