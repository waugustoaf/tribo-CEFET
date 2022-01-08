import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginGRUPO08PageRoutingModule } from './login-grupo08-routing.module';

import { LoginGRUPO08Page } from './login-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginGRUPO08PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginGRUPO08Page],
})
export class LoginGRUPO08PageModule {}
