import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlansGRUPO08PageRoutingModule } from './plans-grupo08-routing.module';

import { PlansGRUPO08Page } from './plans-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlansGRUPO08PageRoutingModule
  ],
  declarations: [PlansGRUPO08Page]
})
export class PlansGRUPO08PageModule {}
