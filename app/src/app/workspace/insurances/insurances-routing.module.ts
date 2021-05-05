import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancesPage } from './insurances.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancesPageRoutingModule {}
