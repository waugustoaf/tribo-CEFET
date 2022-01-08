import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGRUPO08Page } from './login-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGRUPO08PageRoutingModule {}
