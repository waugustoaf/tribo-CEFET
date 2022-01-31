import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentEditGrupo08PageRoutingModule } from './payment-edit-grupo08-routing.module';

import { PaymentEditGrupo08Page } from './payment-edit-grupo08.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentEditGrupo08PageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [PaymentEditGrupo08Page]
})
export class PaymentEditGrupo08PageModule {}
