import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversaPageRoutingModule } from './inversa-routing.module';

import { InversaPage } from './inversa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InversaPageRoutingModule
  ],
  declarations: [InversaPage]
})
export class InversaPageModule {}
