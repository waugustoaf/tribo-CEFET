import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupGRUPO08PageRoutingModule } from './signup-grupo08-routing.module';

import { SignupGRUPO08Page } from './signup-grupo08.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupGRUPO08PageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [SignupGRUPO08Page],
})
export class SignupGRUPO08PageModule {}
