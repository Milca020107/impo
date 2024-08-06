import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonomiosPageRoutingModule } from './monomios-routing.module';

import { MonomiosPage } from './monomios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonomiosPageRoutingModule
  ],
  declarations: [MonomiosPage]
})
export class MonomiosPageModule {}
