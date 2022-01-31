import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseListGrupo08PageRoutingModule } from './exercise-list-grupo08-routing.module';

import { ExerciseListGrupo08Page } from './exercise-list-grupo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseListGrupo08PageRoutingModule
  ],
  declarations: [ExerciseListGrupo08Page]
})
export class ExerciseListGrupo08PageModule {}
