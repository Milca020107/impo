import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Regla3PageRoutingModule } from './regla3-routing.module';

import { Regla3Page } from './regla3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regla3PageRoutingModule
  ],
  declarations: [Regla3Page]
})
export class Regla3PageModule {}
