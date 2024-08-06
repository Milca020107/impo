import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolCilPageRoutingModule } from './vol-cil-routing.module';

import { VolCilPage } from './vol-cil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolCilPageRoutingModule
  ],
  declarations: [VolCilPage]
})
export class VolCilPageModule {}
