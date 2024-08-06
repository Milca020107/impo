import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PictogramaPageRoutingModule } from './pictograma-routing.module';

import { PictogramaPage } from './pictograma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PictogramaPageRoutingModule
  ],
  declarations: [PictogramaPage]
})
export class PictogramaPageModule {}
