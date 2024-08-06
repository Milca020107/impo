import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartesianoPageRoutingModule } from './cartesiano-routing.module';

import { CartesianoPage } from './cartesiano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartesianoPageRoutingModule
  ],
  declarations: [CartesianoPage]
})
export class CartesianoPageModule {}
