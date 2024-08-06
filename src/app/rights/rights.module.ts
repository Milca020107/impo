import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightsPageRoutingModule } from './rights-routing.module';

import { RightsPage } from './rights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightsPageRoutingModule
  ],
  declarations: [RightsPage]
})
export class RightsPageModule {}
