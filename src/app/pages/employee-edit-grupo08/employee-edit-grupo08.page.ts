import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { addDays, format } from 'date-fns';
import { IUserProps } from 'src/app/dtos/user';
import { api } from 'src/app/helpers/api';
import { throwErrors } from 'src/app/helpers/throwErrors';

@Component({
  selector: 'app-employee-edit-grupo08',
  templateUrl: './employee-edit-grupo08.page.html',
  styleUrls: ['./employee-edit-grupo08.page.scss'],
})
export class EmployeeEditGRUPO08Page implements OnInit {
  private id: string;
  private formGroup: FormGroup;
  private employee: {
    name: '';
    email: '';
    password: '';
    cpf: '';
    phone: '';
    birth_date: '';
    role: 'employee';
    hours_per_day?: null;
    wage: null;
    education: '';
    payment_day: null;
    hoursPerDay?: null;
    user?: IUserProps;
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
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      repeatPassword: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ]),
      ],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(15),
        ]),
      ],
      birth_date: ['', Validators.compose([Validators.required])],
      hours_per_day: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(24),
        ]),
      ],
      wage: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      education: ['', Validators.compose([Validators.required])],
      payment_day: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(31),
        ]),
      ],
    };

    const { password, repeatPassword, ...editingForm } = formShape;

    this.formGroup = this.formBuilder.group(
      !!this.id ? editingForm : formShape
    );

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
      const { data } = await api.get(`/employees/${this.id}`);

      this.formGroup.get('name').setValue(data.user.name);
      this.formGroup.get('email').setValue(data.user.email);
      this.formGroup.get('cpf').setValue(data.user.cpf);
      this.formGroup.get('phone').setValue(data.user.phone);
      this.formGroup.get('hours_per_day').setValue(data.hoursPerDay);
      this.formGroup.get('wage').setValue(data.wage);
      this.formGroup.get('education').setValue(data.education);
      this.formGroup.get('payment_day').setValue(data.payment_day);
      this.formGroup
        .get('birth_date')
        .setValue(format(new Date(data.user.birth_date), 'yyyy-MM-dd'));

      this.employee = data;
    } catch (error) {
      console.log(error);
      await this.showToast(throwErrors(error, 'Erro ao buscar funcionário.'));
    }
  }

  async handleSubmit() {
    this.employee.email = this.formGroup.get('email').value;
    this.employee.name = this.formGroup.get('name').value;
    this.employee.cpf = this.formGroup.get('cpf').value;
    this.employee.phone = this.formGroup.get('phone').value;
    this.employee.birth_date = this.formGroup.get('birth_date').value;
    this.employee.hoursPerDay = this.formGroup.get('hours_per_day').value;
    this.employee.wage = this.formGroup.get('wage').value;
    this.employee.education = this.formGroup.get('education').value;
    this.employee.payment_day = this.formGroup.get('payment_day').value;
    const formattedDate = format(
      addDays(new Date(this.employee.birth_date), 1),
      `yyyy-MM-dd'T'HH:mm:ss`
    );

    if (!this.id) {
      if (
        this.formGroup.value.password !== this.formGroup.value.repeatPassword
      ) {
        await this.showToast('Senhas não conferem.');
        return;
      }

      this.employee.password = this.formGroup.get('password').value;
    }

    try {
      if (!!this.id) {
        const { user, ...props } = this.employee;
        await api.put(`/employees/${this.id}`, {
          ...props,
          birth_date: formattedDate,
        });

        await this.showToast('Funcionário atualizado com sucesso.');
        this.navController.navigateBack('/employee-list');
      } else {
        await api.post('/employees', {
          ...this.employee,
          birth_date: formattedDate,
        });

        await this.showToast('Funcionário criado com sucesso.');
        this.navigateBack();
      }
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Erro ao criar/editar funcionário.')
      );
    }
  }

  navigateBack() {
    this.navController.navigateBack('/employee-list');
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
              await api.delete(`/employees/${this.id}`);
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
