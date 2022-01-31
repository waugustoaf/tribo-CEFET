import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentListGroupo08Page } from './payment-list-groupo08.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentListGroupo08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentListGroupo08PageRoutingModule {}
