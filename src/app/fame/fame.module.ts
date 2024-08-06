import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamePageRoutingModule } from './fame-routing.module';

import { FamePage } from './fame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamePageRoutingModule
  ],
  declarations: [FamePage]
})
export class FamePageModule {}
