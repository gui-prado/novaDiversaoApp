import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GotPage } from './got.page';

const routes: Routes = [
  {
    path: '',
    component: GotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GotPageRoutingModule {}
