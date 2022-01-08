import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IDietsProps } from 'src/app/dtos/diets';
import { IPlanProps } from 'src/app/dtos/plans';
import { IUserProps } from 'src/app/dtos/user';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';

@Component({
  selector: 'app-home-grupo08',
  templateUrl: './home-grupo08.page.html',
  styleUrls: ['./home-grupo08.page.scss'],
})
export class HomeGRUPO08Page implements OnInit {
  public user: IUserProps;
  public diets: IDietsProps[];

  constructor(
    private authService: AuthenticationGRUPO08Service,
    private toastController: ToastController
  ) {
    this.user = this.authService.getUser();
    this.updatePlans();
  }

  ngOnInit() {}

  formatActive = (active: boolean) => (active ? 'Ativo' : 'Inativo');

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async updatePlans() {
    try {
      const { data } = await api.get<IDietsProps[]>('/diets');

      this.diets = [...data, ...data, ...data];
    } catch (error) {
      this.showToast(throwErrors(error, 'Falha ao buscar as dietas.'));
    }
  }
}
