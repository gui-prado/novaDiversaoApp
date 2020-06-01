import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GotPageRoutingModule } from './got-routing.module';

import { GotPage } from './got.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GotPageRoutingModule
  ],
  declarations: [GotPage]
})
export class GotPageModule {}
