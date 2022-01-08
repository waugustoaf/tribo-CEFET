import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGRUPO08Page } from './home-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: HomeGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeGRUPO08PageRoutingModule {}
