import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumnatPageRoutingModule } from './numnat-routing.module';

import { NumnatPage } from './numnat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumnatPageRoutingModule
  ],
  declarations: [NumnatPage]
})
export class NumnatPageModule {}
