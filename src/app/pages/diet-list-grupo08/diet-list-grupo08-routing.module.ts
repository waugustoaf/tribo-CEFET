import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietListGRUPO08Page } from './diet-list-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: DietListGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietListGRUPO08PageRoutingModule {}
