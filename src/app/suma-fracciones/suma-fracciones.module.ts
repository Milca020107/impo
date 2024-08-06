import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumaFraccionesPageRoutingModule } from './suma-fracciones-routing.module';

import { SumaFraccionesPage } from './suma-fracciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumaFraccionesPageRoutingModule
  ],
  declarations: [SumaFraccionesPage]
})
export class SumaFraccionesPageModule {}
