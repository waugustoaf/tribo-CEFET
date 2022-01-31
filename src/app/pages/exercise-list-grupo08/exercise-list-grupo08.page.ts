import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { IExerciseProps } from 'src/app/dtos/exercise';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-exercise-list-grupo08',
  templateUrl: './exercise-list-grupo08.page.html',
  styleUrls: ['./exercise-list-grupo08.page.scss'],
})
export class ExerciseListGrupo08Page implements OnInit {
  private exercises: IExerciseProps[] = [];

  constructor(
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.updateExercises();
  }

  ngOnInit() {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
  }

  async updateExercises() {
    try {
      const { data } = await api.get<IExerciseProps[]>('/exercises');

      this.exercises = data;
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível buscar os exercícios.')
      );
    }
  }

  formatType(type: 'gain' | 'loss') {
    return type === 'gain' ? 'Ganho' : 'Perda';
  }

  navigateBack() {
    this.navController.navigateBack('/home-guarded');
  }
}
