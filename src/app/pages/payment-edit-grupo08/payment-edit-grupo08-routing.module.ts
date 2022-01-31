import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentEditGrupo08Page } from './payment-edit-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentEditGrupo08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentEditGrupo08PageRoutingModule {}
