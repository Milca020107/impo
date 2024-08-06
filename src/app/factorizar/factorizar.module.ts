import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorizarPageRoutingModule } from './factorizar-routing.module';

import { FactorizarPage } from './factorizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactorizarPageRoutingModule
  ],
  declarations: [FactorizarPage]
})
export class FactorizarPageModule {}
