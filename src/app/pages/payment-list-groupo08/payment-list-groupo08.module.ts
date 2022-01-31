import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentListGroupo08PageRoutingModule } from './payment-list-groupo08-routing.module';

import { PaymentListGroupo08Page } from './payment-list-groupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentListGroupo08PageRoutingModule
  ],
  declarations: [PaymentListGroupo08Page]
})
export class PaymentListGroupo08PageModule {}
