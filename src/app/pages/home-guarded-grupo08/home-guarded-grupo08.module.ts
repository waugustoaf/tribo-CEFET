import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeGuardedGRUPO08PageRoutingModule } from './home-guarded-grupo08-routing.module';

import { HomeGuardedGRUPO08Page } from './home-guarded-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeGuardedGRUPO08PageRoutingModule
  ],
  declarations: [HomeGuardedGRUPO08Page]
})
export class HomeGuardedGRUPO08PageModule {}
