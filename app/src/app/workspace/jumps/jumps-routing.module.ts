import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumpsPage } from './jumps.page';

const routes: Routes = [
  {
    path: '',
    component: JumpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumpsPageRoutingModule {}
