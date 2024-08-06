import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolumenRectPageRoutingModule } from './volumen-rect-routing.module';

import { VolumenRectPage } from './volumen-rect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumenRectPageRoutingModule
  ],
  declarations: [VolumenRectPage]
})
export class VolumenRectPageModule {}
