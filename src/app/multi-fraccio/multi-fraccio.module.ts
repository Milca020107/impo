import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiFraccioPageRoutingModule } from './multi-fraccio-routing.module';

import { MultiFraccioPage } from './multi-fraccio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiFraccioPageRoutingModule
  ],
  declarations: [MultiFraccioPage]
})
export class MultiFraccioPageModule {}
