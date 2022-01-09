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
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';

@Component({
  selector: 'app-user-edit-grupo08',
  templateUrl: './user-edit-grupo08.page.html',
  styleUrls: ['./user-edit-grupo08.page.scss'],
})
export class UserEditGRUPO08Page implements OnInit {
  public loggedUser: IUserProps;
  private id: string;
  private user = {
    email: '',
    password: '',
    name: '',
    cpf: '',
    phone: '',
    birth_date: '',
  };

  private formGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationGRUPO08Service,
    private navController: NavController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

    this.loggedUser = this.authService.getUser();

    if (
      this.id !== this.authService.getUser().id &&
      this.authService.getUser()?.role !== 'administrator'
    ) {
      this.showToast('Você não tem permissão para editar este usuário!');
      this.navController.navigateBack('/home');
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
    };

    const { password, repeatPassword, ...editingForm } = formShape;

    this.formGroup = this.formBuilder.group(
      !!this.id ? editingForm : formShape
    );

    if (this.id) {
      if (this.authService.getUser()?.id === this.id) {
        this.setForm(this.authService.getUser());
      } else {
        this.setForm();
      }
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async setForm(item?: IUserProps) {
    try {
      const datas = ['name', 'email', 'cpf', 'phone'];
      let user = item;
      if (!item) {
        const { data } = await api.get(`/users/${this.id}`);
        user = data;
      }

      datas.forEach((key) => {
        this.formGroup.get(key).setValue(user[key]);
      });
      this.formGroup
        .get('birth_date')
        .setValue(format(new Date(user.birth_date), 'yyyy-MM-dd'));
    } catch (error) {
      await this.showToast(throwErrors(error, 'Erro ao buscar usuário.'));
    }
  }

  ngOnInit() {}

  async handleSubmit() {
    this.user.email = this.formGroup.value.email;
    this.user.cpf = this.formGroup.value.cpf.replace(/\D/g, '');
    this.user.name = this.formGroup.value.name;
    this.user.phone = this.formGroup.value.phone;
    this.user.birth_date = this.formGroup.value.birth_date;
    const formattedDate = format(
      addDays(new Date(this.user.birth_date), 1),
      `yyyy-MM-dd'T'HH:mm:ss`
    );

    if (!this.id) {
      if (
        this.formGroup.value.password !== this.formGroup.value.repeatPassword
      ) {
        this.showToast('Senhas não conferem!');
        return;
      }
      this.user.password = this.formGroup.value.password;
    }

    try {
      if (!!this.id) {
        const signed = await this.authService.editUser(
          {
            ...this.user,
            birth_date: formattedDate,
          },
          this.id
        );

        if (signed) {
          this.showToast('Usuário editado com sucesso.');
          this.navController.navigateRoot('/user-list');
        }
      } else {
        const created = await this.authService.createUser(this.user);

        if (created) {
          this.showToast('Usuário criado com sucesso.');
          this.navController.navigateRoot('/user-list');
        }
      }
    } catch (error) {}
  }

  navigateBack() {
    this.navController.navigateBack('/user-list');
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
              await api.delete(`/users/${this.id}`);
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
