import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseListGrupo08Page } from './exercise-list-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseListGrupo08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseListGrupo08PageRoutingModule {}
