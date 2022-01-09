import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { IDietsProps } from 'src/app/dtos/diets';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-diet-edit-group08',
  templateUrl: './diet-edit-group08.page.html',
  styleUrls: ['./diet-edit-group08.page.scss'],
})
export class DietEditGROUP08Page implements OnInit {
  private id: string;
  private formGroup: FormGroup;
  private diet: IDietsProps;

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

    this.formGroup = this.formBuilder.group({
      feed_time: ['', Validators.required],
      food_type: ['', Validators.required],
      instructions: ['', Validators.required],
    });

    if (this.id) {
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
      const { data } = await api.get(`/diets/${this.id}`);
      this.formGroup.get('feed_time').setValue(data.feed_time);
      this.formGroup.get('food_type').setValue(data.food_type);
      this.formGroup.get('instructions').setValue(data.instructions);

      this.diet = data;
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao carregar dados!'));
      this.navController.navigateBack('/diet-list');
    }
  }

  navigateBack() {
    this.navController.navigateBack('/diet-list');
  }

  async handleSubmit() {
    const { feed_time, food_type, instructions } = this.formGroup.value;

    try {
      if (!!this.id) {
        await api.put(`/diets/${this.id}`, {
          feed_time,
          food_type,
          instructions,
        });

        await this.showToast('Alterações salvas com sucesso!');
        this.navigateBack();
      } else {
        await api.post('/diets', {
          feed_time,
          food_type,
          instructions,
        });

        await this.showToast('Registro salvo com sucesso!');
        this.navigateBack();
      }
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao salvar!'));
    }
  }

  async handleDelete() {
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: 'Deseja realmente excluir este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: async () => {
            try {
              await api.delete(`/diets/${this.id}`);
              await this.showToast('Registro excluído com sucesso!');
              this.navigateBack();
            } catch (error) {
              await this.showToast(throwErrors(error, 'Erro ao excluir!'));
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
