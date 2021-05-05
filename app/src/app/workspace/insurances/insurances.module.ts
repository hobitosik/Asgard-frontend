import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsurancesPageRoutingModule } from './insurances-routing.module';

import { InsurancesPage } from './insurances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsurancesPageRoutingModule
  ],
  declarations: [InsurancesPage]
})
export class InsurancesPageModule {}
