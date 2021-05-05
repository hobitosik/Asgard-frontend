import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemsPageRoutingModule } from './systems-routing.module';

import { SystemsPage } from './systems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemsPageRoutingModule
  ],
  declarations: [SystemsPage]
})
export class SystemsPageModule {}
