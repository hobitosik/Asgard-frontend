import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanopiesPage } from './canopies.page';

const routes: Routes = [
  {
    path: '',
    component: CanopiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanopiesPageRoutingModule {}
