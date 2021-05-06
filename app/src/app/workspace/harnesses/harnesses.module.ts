import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarnessesPageRoutingModule } from './harnesses-routing.module';

import { HarnessesPage } from './harnesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarnessesPageRoutingModule
  ],
  declarations: [HarnessesPage]
})
export class HarnessesPageModule {}
