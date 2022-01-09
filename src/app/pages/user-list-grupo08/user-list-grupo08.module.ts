import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserListGRUPO08PageRoutingModule } from './user-list-grupo08-routing.module';

import { UserListGRUPO08Page } from './user-list-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserListGRUPO08PageRoutingModule
  ],
  declarations: [UserListGRUPO08Page]
})
export class UserListGRUPO08PageModule {}
