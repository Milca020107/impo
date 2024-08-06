import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimetriaPageRoutingModule } from './simetria-routing.module';

import { SimetriaPage } from './simetria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimetriaPageRoutingModule
  ],
  declarations: [SimetriaPage]
})
export class SimetriaPageModule {}
