import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IUserProps } from 'src/app/dtos/user';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';

@Component({
  selector: 'app-user-list-grupo08',
  templateUrl: './user-list-grupo08.page.html',
  styleUrls: ['./user-list-grupo08.page.scss'],
})
export class UserListGRUPO08Page implements OnInit {
  private users: IUserProps[];

  constructor(
    private authService: AuthenticationGRUPO08Service,
    private toastController: ToastController
  ) {
    this.updateUsers();
  }

  ngOnInit() {}

  async showToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  async updateUsers() {
    try {
      const { data } = await api.get<IUserProps[]>('/users');

      this.users = data;
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível buscar os usuários.')
      );
    }
  }

  formatRole(role: IUserProps['role']) {
    switch (role) {
      case 'administrator':
        return 'Administrador';
      case 'employee':
        return 'Funcionário';
      case 'client':
        return 'Cliente';
      default:
        return 'Usuário';
    }
  }
}
