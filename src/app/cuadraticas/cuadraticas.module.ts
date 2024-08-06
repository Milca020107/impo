import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadraticasPageRoutingModule } from './cuadraticas-routing.module';

import { CuadraticasPage } from './cuadraticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadraticasPageRoutingModule
  ],
  declarations: [CuadraticasPage]
})
export class CuadraticasPageModule {}
