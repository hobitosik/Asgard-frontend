import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AadsPageRoutingModule } from './aads-routing.module';

import { AadsPage } from './aads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AadsPageRoutingModule
  ],
  declarations: [AadsPage]
})
export class AadsPageModule {}
