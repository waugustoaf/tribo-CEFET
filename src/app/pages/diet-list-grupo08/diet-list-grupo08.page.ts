import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { IDietsProps } from 'src/app/dtos/diets';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-diet-list-grupo08',
  templateUrl: './diet-list-grupo08.page.html',
  styleUrls: ['./diet-list-grupo08.page.scss'],
})
export class DietListGRUPO08Page implements OnInit {
  private diets: IDietsProps[] = [];

  constructor(private toastController: ToastController, private navController: NavController) {
    this.updateDiets();
  }

  ngOnInit() {
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });

    toast.present();
  }

  async updateDiets() {
    try {
      const { data } = await api.get<IDietsProps[]>('/diets');

      this.diets = data;
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível carregar as dietas.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/home-guarded');
  }
}
