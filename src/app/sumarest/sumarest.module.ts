import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumarestPageRoutingModule } from './sumarest-routing.module';

import { SumarestPage } from './sumarest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumarestPageRoutingModule
  ],
  declarations: [SumarestPage]
})
export class SumarestPageModule {}
