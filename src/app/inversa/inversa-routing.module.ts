import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InversaPage } from './inversa.page';

const routes: Routes = [
  {
    path: '',
    component: InversaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversaPageRoutingModule {}
