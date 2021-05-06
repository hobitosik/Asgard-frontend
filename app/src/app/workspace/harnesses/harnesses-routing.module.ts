import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarnessesPage } from './harnesses.page';

const routes: Routes = [
  {
    path: '',
    component: HarnessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarnessesPageRoutingModule {}
