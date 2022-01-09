import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeListGRUPO08PageRoutingModule } from './employee-list-grupo08-routing.module';

import { EmployeeListGRUPO08Page } from './employee-list-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeListGRUPO08PageRoutingModule
  ],
  declarations: [EmployeeListGRUPO08Page]
})
export class EmployeeListGRUPO08PageModule {}
