import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnguloPageRoutingModule } from './angulo-routing.module';

import { AnguloPage } from './angulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnguloPageRoutingModule
  ],
  declarations: [AnguloPage]
})
export class AnguloPageModule {}
