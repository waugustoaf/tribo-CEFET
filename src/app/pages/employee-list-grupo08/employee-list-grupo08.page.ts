import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { th } from 'date-fns/locale';
import { IEmployeeProps } from 'src/app/dtos/employee';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-employee-list-grupo08',
  templateUrl: './employee-list-grupo08.page.html',
  styleUrls: ['./employee-list-grupo08.page.scss'],
})
export class EmployeeListGRUPO08Page implements OnInit {
  private employees: IEmployeeProps[] = [];

  constructor(
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.updateEmployees();
  }

  ngOnInit() {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async updateEmployees() {
    try {
      const { data } = await api.get<IEmployeeProps[]>('/employees');

      this.employees = data;
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível buscar os funcionários.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/home-guarded');
  }
}
