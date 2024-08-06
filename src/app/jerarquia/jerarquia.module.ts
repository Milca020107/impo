import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JerarquiaPageRoutingModule } from './jerarquia-routing.module';

import { JerarquiaPage } from './jerarquia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JerarquiaPageRoutingModule
  ],
  declarations: [JerarquiaPage]
})
export class JerarquiaPageModule {}
