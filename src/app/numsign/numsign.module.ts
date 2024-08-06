import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumsignPageRoutingModule } from './numsign-routing.module';

import { NumsignPage } from './numsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumsignPageRoutingModule
  ],
  declarations: [NumsignPage]
})
export class NumsignPageModule {}
