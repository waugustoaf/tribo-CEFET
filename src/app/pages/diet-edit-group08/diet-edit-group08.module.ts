import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietEditGROUP08PageRoutingModule } from './diet-edit-group08-routing.module';

import { DietEditGROUP08Page } from './diet-edit-group08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietEditGROUP08PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DietEditGROUP08Page]
})
export class DietEditGROUP08PageModule {}
