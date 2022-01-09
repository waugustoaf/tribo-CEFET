import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditGRUPO08PageRoutingModule } from './user-edit-grupo08-routing.module';

import { UserEditGRUPO08Page } from './user-edit-grupo08.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditGRUPO08PageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [UserEditGRUPO08Page],
})
export class UserEditGRUPO08PageModule {}
