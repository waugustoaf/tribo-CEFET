import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietListGRUPO08PageRoutingModule } from './diet-list-grupo08-routing.module';

import { DietListGRUPO08Page } from './diet-list-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietListGRUPO08PageRoutingModule
  ],
  declarations: [DietListGRUPO08Page]
})
export class DietListGRUPO08PageModule {}
