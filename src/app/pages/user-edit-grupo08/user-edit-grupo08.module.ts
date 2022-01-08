import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditGRUPO08PageRoutingModule } from './user-edit-grupo08-routing.module';

import { UserEditGRUPO08Page } from './user-edit-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditGRUPO08PageRoutingModule
  ],
  declarations: [UserEditGRUPO08Page]
})
export class UserEditGRUPO08PageModule {}
