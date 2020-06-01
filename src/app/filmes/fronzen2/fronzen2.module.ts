import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fronzen2PageRoutingModule } from './fronzen2-routing.module';

import { Fronzen2Page } from './fronzen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fronzen2PageRoutingModule
  ],
  declarations: [Fronzen2Page]
})
export class Fronzen2PageModule {}
