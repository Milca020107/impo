import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcuacionesPageRoutingModule } from './ecuaciones-routing.module';

import { EcuacionesPage } from './ecuaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcuacionesPageRoutingModule
  ],
  declarations: [EcuacionesPage]
})
export class EcuacionesPageModule {}
