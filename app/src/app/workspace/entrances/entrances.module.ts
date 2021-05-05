import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrancesPageRoutingModule } from './entrances-routing.module';

import { EntrancesPage } from './entrances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrancesPageRoutingModule
  ],
  declarations: [EntrancesPage]
})
export class EntrancesPageModule {}
