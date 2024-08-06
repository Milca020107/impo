import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaEcPageRoutingModule } from './sistema-ec-routing.module';

import { SistemaEcPage } from './sistema-ec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaEcPageRoutingModule
  ],
  declarations: [SistemaEcPage]
})
export class SistemaEcPageModule {}
