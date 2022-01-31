import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseEditGrupo08Page } from './exercise-edit-grupo08.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseEditGrupo08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseEditGrupo08PageRoutingModule {}
