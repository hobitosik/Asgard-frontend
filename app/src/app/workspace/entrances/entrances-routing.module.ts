import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrancesPage } from './entrances.page';

const routes: Routes = [
  {
    path: '',
    component: EntrancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrancesPageRoutingModule {}
