import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGuardedGRUPO08Page } from './home-guarded-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: HomeGuardedGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeGuardedGRUPO08PageRoutingModule {}
