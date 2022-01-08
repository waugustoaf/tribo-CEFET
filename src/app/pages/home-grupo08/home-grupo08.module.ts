import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeGRUPO08PageRoutingModule } from './home-grupo08-routing.module';

import { HomeGRUPO08Page } from './home-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeGRUPO08PageRoutingModule
  ],
  declarations: [HomeGRUPO08Page]
})
export class HomeGRUPO08PageModule {}
