import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaTriaPageRoutingModule } from './area-tria-routing.module';

import { AreaTriaPage } from './area-tria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaTriaPageRoutingModule
  ],
  declarations: [AreaTriaPage]
})
export class AreaTriaPageModule {}
