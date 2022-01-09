import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';
import { addDays, format } from 'date-fns';

@Component({
  selector: 'app-signup-grupo08',
  templateUrl: './signup-grupo08.page.html',
  styleUrls: ['./signup-grupo08.page.scss'],
})
export class SignupGRUPO08Page implements OnInit {
  public user = {
    email: '',
    password: '',
    name: '',
    cpf: '',
    phone: '',
    birth_date: '',
  };

  public formGroup: FormGroup;

  constructor(
    private navController: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthenticationGRUPO08Service,
    private toastController: ToastController
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required])],
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
    });
  }

  ngOnInit() {
    this.authService.signOut();
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  async handleSubmit() {
    this.user.email = this.formGroup.value.email;
    this.user.password = this.formGroup.value.password;
    this.user.cpf = this.formGroup.value.cpf.replace(/\D/g, '');
    this.user.name = this.formGroup.value.name;
    this.user.phone = this.formGroup.value.phone;
    this.user.birth_date = this.formGroup.value.birth_date;
    const formattedDate = format(
      addDays(new Date(this.user.birth_date), 1),
      `yyyy-MM-dd'T'HH:mm:ss`
    );
    const repeatPassword = this.formGroup.value.repeatPassword;

    if (this.user.password !== repeatPassword) {
      return await this.showToast('As senhas não conferem');
    }

    try {
      const signed = await this.authService.createUser({
        ...this.user,
        birth_date: formattedDate,
      });

      if (signed) {
        this.showToast(
          'Usuário criado com sucesso. Agora você pode fazer login.'
        );
        this.navController.navigateRoot('/login');
      } else {
        this.navController.navigateBack('/signup');
      }
    } catch (error) {}
  }
}
