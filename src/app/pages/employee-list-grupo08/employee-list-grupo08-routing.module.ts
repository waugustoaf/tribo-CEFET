import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListGRUPO08Page } from './employee-list-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListGRUPO08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeListGRUPO08PageRoutingModule {}
