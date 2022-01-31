import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-exercise-edit-grupo08',
  templateUrl: './exercise-edit-grupo08.page.html',
  styleUrls: ['./exercise-edit-grupo08.page.scss'],
})
export class ExerciseEditGrupo08Page implements OnInit {
  private id: string;
  private formGroup: FormGroup;

  private exercise = {
    type: '',
    name: '',
    description: '',
    duration: '',
    repetitions: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private navController: NavController,
    private alertController: AlertController
  ) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

    const formShape = {
      type: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      repetitions: ['', Validators.required],
      duration: ['', Validators.required],
    };

    this.formGroup = this.formBuilder.group(formShape);

    if (!!this.id) {
      this.setForm();
    }
  }

  ngOnInit() {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async setForm() {
    try {
      const { data } = await api.get('/exercises/' + this.id);

      this.formGroup.get('type').setValue(data.type);
      this.formGroup.get('name').setValue(data.name);
      this.formGroup.get('description').setValue(data.description);
      this.formGroup.get('duration').setValue(data.duration);
      this.formGroup.get('repetitions').setValue(data.repetitions);

      this.exercise = data;
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao buscar exercício.'));
    }
  }

  async handleSubmit() {
    this.exercise.name = this.formGroup.get('name').value;
    this.exercise.description = this.formGroup.get('description').value;
    this.exercise.type = this.formGroup.get('type').value;
    this.exercise.repetitions = this.formGroup.get('repetitions').value;
    this.exercise.duration = this.formGroup.get('duration').value;

    try {
      if (!!this.id) {
        const { description, duration, name, repetitions, type } = this.exercise;
        await api.put(`/exercises/${this.id}`, {
          description,
          duration,
          name,
          repetitions,
          type,
        });

        await this.showToast('Exercício atualizado com sucesso.');
        this.navController.navigateBack('/exercise-list');
      } else {
        await api.post('/exercises', this.exercise);

        await this.showToast('Exercício cadastrado com sucesso.');
        this.navController.navigateBack('/exercise-list');
      }
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Erro ao cadastrar ou atualizar exercício.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/exercise-list');
  }

  async handleDelete() {
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: 'Deseja realmente excluir este exercício?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: async () => {
            try {
              await api.delete(`/exercises/${this.id}`);

              await this.showToast('Exercício excluído com sucesso.');
              this.navController.navigateBack('/exercise-list');
            } catch (error) {
              await this.showToast(
                throwErrors(error, 'Erro ao excluir exercício.')
              );
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
