import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimPageRoutingModule } from './prim-routing.module';

import { PrimPage } from './prim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimPageRoutingModule
  ],
  declarations: [PrimPage]
})
export class PrimPageModule {}
