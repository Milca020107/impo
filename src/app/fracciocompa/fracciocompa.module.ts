import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FracciocompaPageRoutingModule } from './fracciocompa-routing.module';

import { FracciocompaPage } from './fracciocompa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FracciocompaPageRoutingModule
  ],
  declarations: [FracciocompaPage]
})
export class FracciocompaPageModule {}
