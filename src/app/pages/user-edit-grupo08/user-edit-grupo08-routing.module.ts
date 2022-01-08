import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEditGRUPO08Page } from './user-edit-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditGRUPO08PageRoutingModule {}
