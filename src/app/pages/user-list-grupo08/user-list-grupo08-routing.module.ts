import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListGRUPO08Page } from './user-list-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: UserListGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListGRUPO08PageRoutingModule {}
