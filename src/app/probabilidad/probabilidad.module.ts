import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbabilidadPageRoutingModule } from './probabilidad-routing.module';

import { ProbabilidadPage } from './probabilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbabilidadPageRoutingModule
  ],
  declarations: [ProbabilidadPage]
})
export class ProbabilidadPageModule {}
