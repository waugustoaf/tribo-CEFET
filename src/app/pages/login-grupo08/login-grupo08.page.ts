import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { throwErrors } from 'src/app/helpers/throwErrors';
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';

@Component({
  selector: 'app-login-grupo08',
  templateUrl: './login-grupo08.page.html',
  styleUrls: ['./login-grupo08.page.scss'],
})
export class LoginGRUPO08Page implements OnInit {
  public user = {
    email: '',
    password: '',
  };

  public formGroup: FormGroup;

  constructor(
    private navController: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthenticationGRUPO08Service,
    private toastController: ToastController,
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
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

    try {
      const signed = await this.authService.signIn(this.user);

      if (signed) {
        this.navController.navigateRoot('/home');
      } else {
        await this.showToast('Usuário e/ou senha inválidos');
        this.navController.navigateBack('/login');
      }
    } catch (error) {
      await this.showToast(
        throwErrors(error, 'Não foi possível realizar o login'),
      );
    }
  }
}
