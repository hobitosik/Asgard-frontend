import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanopiesPageRoutingModule } from './canopies-routing.module';

import { CanopiesPage } from './canopies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanopiesPageRoutingModule
  ],
  declarations: [CanopiesPage]
})
export class CanopiesPageModule {}
