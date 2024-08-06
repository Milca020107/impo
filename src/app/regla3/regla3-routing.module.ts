import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regla3Page } from './regla3.page';

const routes: Routes = [
  {
    path: '',
    component: Regla3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regla3PageRoutingModule {}
