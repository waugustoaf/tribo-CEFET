import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansGRUPO08Page } from './plans-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: PlansGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansGRUPO08PageRoutingModule {}
