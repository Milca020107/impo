import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnguloPage } from './angulo.page';

const routes: Routes = [
  {
    path: '',
    component: AnguloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnguloPageRoutingModule {}
