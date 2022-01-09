import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeEditGRUPO08Page } from './employee-edit-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeEditGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeEditGRUPO08PageRoutingModule {}
