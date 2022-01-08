import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupGRUPO08Page } from './signup-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: SignupGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupGRUPO08PageRoutingModule {}
