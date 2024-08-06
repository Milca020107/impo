import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PitagoraPageRoutingModule } from './pitagora-routing.module';

import { PitagoraPage } from './pitagora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PitagoraPageRoutingModule
  ],
  declarations: [PitagoraPage]
})
export class PitagoraPageModule {}
