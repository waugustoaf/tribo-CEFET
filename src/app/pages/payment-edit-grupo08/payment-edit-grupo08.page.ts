import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { IUserProps } from 'src/app/dtos/user';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-payment-edit-grupo08',
  templateUrl: './payment-edit-grupo08.page.html',
  styleUrls: ['./payment-edit-grupo08.page.scss'],
})
export class PaymentEditGrupo08Page implements OnInit {
  private id: string;
  private formGroup: FormGroup;
  private users: IUserProps[];

  private payment = {
    receipt_image: '',
    user_id: '',
    value: '',
    month_and_year: '',
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
      user_id: ['', Validators.required],
      value: ['', Validators.required],
      month_and_year: ['', Validators.required],
      receipt_image: [''],
    };

    this.formGroup = this.formBuilder.group(formShape);

    if (!!this.id) {
      this.setForm();
    }

    this.updateUsers();
  }

  ngOnInit() {}

  async updateUsers() {
    try {
      const { data } = await api.get('/users');

      this.users = data;
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao buscar pagamentos.'));
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async setForm() {
    try {
      const { data } = await api.get('/payments/' + this.id);

      this.formGroup.get('user_id').setValue(data.user.id);
      this.formGroup.get('value').setValue(data.value);
      this.formGroup.get('month_and_year').setValue(data.monthAndYear);
      this.formGroup.get('receipt_image').setValue(data.receipt_image);

      this.payment = data;
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao buscar pagamento.'));
    }
  }

  async handleSubmit() {
    this.payment.month_and_year = this.formGroup.get('month_and_year').value;
    this.payment.user_id = this.formGroup.get('user_id').value;
    this.payment.value = this.formGroup.get('value').value;
    this.payment.receipt_image = this.formGroup.get('receipt_image').value;

    try {
      if (!!this.id) {
        const { user_id, value, receipt_image, month_and_year } = this.payment;
        await api.put(`/payments/${this.id}`, {
          user_id,
          value,
          receipt_image,
          month_and_year
        });

        await this.showToast('Pagamento atualizado com sucesso.');
        this.navController.navigateBack('/payment-list');
      } else {
        await api.post('/payments', this.payment);

        await this.showToast('Pagamento cadastrado com sucesso.');
        this.navController.navigateBack('/payment-list');
      }
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Erro ao cadastrar ou atualizar pagamento.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/payment-list');
  }

  async handleDelete() {
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: 'Deseja realmente excluir este pagamento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: async () => {
            try {
              await api.delete(`/payments/${this.id}`);

              await this.showToast('Pagamento excluído com sucesso.');
              this.navController.navigateBack('/payment-list');
            } catch (error) {
              await this.showToast(
                throwErrors(error, 'Erro ao excluir pagamento.')
              );
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
