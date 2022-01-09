import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeEditGRUPO08PageRoutingModule } from './employee-edit-grupo08-routing.module';

import { EmployeeEditGRUPO08Page } from './employee-edit-grupo08.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeEditGRUPO08PageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [EmployeeEditGRUPO08Page],
})
export class EmployeeEditGRUPO08PageModule {}
