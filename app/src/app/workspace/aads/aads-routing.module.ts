import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AadsPage } from './aads.page';

const routes: Routes = [
  {
    path: '',
    component: AadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AadsPageRoutingModule {}
