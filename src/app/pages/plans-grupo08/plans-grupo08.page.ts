import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IAuthProps } from 'src/app/dtos/db';
import { IPlanProps } from 'src/app/dtos/plans';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-plans-grupo08',
  templateUrl: './plans-grupo08.page.html',
  styleUrls: ['./plans-grupo08.page.scss'],
})
export class PlansGRUPO08Page implements OnInit {
  public plans: IPlanProps[] = [];
  public selectedPlan: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {
    this.updatePlans();
  }

  ngOnInit() {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  async updatePlans() {
    try {
      const { data } = await api.get<IPlanProps[]>('/plans');

      this.plans = data.sort((a, b) => (a.value > b.value ? -1 : 1));

      if (!this.selectedPlan) {
        this.selectedPlan = this.plans[0].id;
      }
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível carregar os planos')
      );
    }
  }

  formatValue(value: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  setSelectedPlan(id: string) {
    this.selectedPlan = id;
  }

  submit() {
    const auth =
      JSON.parse(localStorage.getItem('tribo:auth')) ??
      ({
        hasSeen: true,
        token: '',
        user: null,
      } as IAuthProps);

    auth.hasSeen = true;

    localStorage.setItem('tribo:auth', JSON.stringify(auth));

    this.router.navigateByUrl('');
  }
}
