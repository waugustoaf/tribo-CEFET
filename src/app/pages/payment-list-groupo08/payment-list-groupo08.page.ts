import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { IPaymentsProps } from 'src/app/dtos/payment';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-payment-list-groupo08',
  templateUrl: './payment-list-groupo08.page.html',
  styleUrls: ['./payment-list-groupo08.page.scss'],
})
export class PaymentListGroupo08Page implements OnInit {
  private payments: IPaymentsProps[] = [];

  constructor(
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.updatePayments();
  }

  ngOnInit() {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
  }

  async updatePayments() {
    try {
      const { data } = await api.get<IPaymentsProps[]>('/payments');

      this.payments = data;
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível buscar os pagamentos.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/home-guarded');
  }
}
