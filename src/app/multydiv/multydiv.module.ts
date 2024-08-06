import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultydivPageRoutingModule } from './multydiv-routing.module';

import { MultydivPage } from './multydiv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultydivPageRoutingModule
  ],
  declarations: [MultydivPage]
})
export class MultydivPageModule {}
