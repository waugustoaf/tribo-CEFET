import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietEditGROUP08Page } from './diet-edit-group08.page';

const routes: Routes = [
  {
    path: '',
    component: DietEditGROUP08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietEditGROUP08PageRoutingModule {}
