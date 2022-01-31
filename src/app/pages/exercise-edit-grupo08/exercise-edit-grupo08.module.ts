import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseEditGrupo08PageRoutingModule } from './exercise-edit-grupo08-routing.module';

import { ExerciseEditGrupo08Page } from './exercise-edit-grupo08.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseEditGrupo08PageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [ExerciseEditGrupo08Page],
})
export class ExerciseEditGrupo08PageModule {}
