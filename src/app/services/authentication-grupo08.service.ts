import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { IAuthProps, IUserProps } from '../dtos/db';
import { api } from '../helpers/api';
import { throwErrors } from '../helpers/throwErrors';

interface SignInResponseProps {
  token: string;
  user: IUserProps;
}

interface SignInProps {
  email: string;
  password: string;
}

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birth_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGRUPO08Service {
  private auth: IAuthProps;
  private isAuthenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(null);

  constructor(private toastController: ToastController) {
    this.auth = JSON.parse(localStorage.getItem('tribo:auth')) as IAuthProps;
    this.isAuthenticated.next(!!this.auth?.token);
  }

  async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });

    toast.present();
  }

  async signIn(credentials: SignInProps): Promise<boolean> {
    try {
      const { data } = await api.post<SignInResponseProps>(
        '/sessions',
        credentials
      );

      const auth: IAuthProps = {
        hasSeen: this.auth?.hasSeen ?? false,
        token: data.token,
        user: data.user,
      };

      localStorage.setItem('tribo:auth', JSON.stringify(auth));
      this.isAuthenticated.next(!!auth?.token);

      api.defaults.headers.common.Authorization = `Bearer ${auth.token}`;

      this.auth = auth;
      return true;
    } catch (err) {
      await this.showToast(throwErrors(err, 'Usuário e/ou senha inválidos.'));
      return false;
    }
  }

  async createUser(userProps: CreateUserProps): Promise<boolean> {
    try {
      await api.post<SignInResponseProps>('/users', {
        ...userProps,
        role: 'client',
      });

      return true;
    } catch (err) {
      await this.showToast(
        throwErrors(err, 'Não foi possível criar o usuário.')
      );
      return false;
    }
  }

  signOut(): void {
    const oldAuth = JSON.parse(
      localStorage.getItem('tribo:auth')
    ) as IAuthProps;

    const auth: IAuthProps = {
      hasSeen: oldAuth?.hasSeen ?? false,
      token: '',
      user: null,
    };

    this.isAuthenticated.next(!!auth?.token);
    return localStorage.setItem('tribo:auth', JSON.stringify(auth));
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getUser() {
    return this.auth?.user;
  }

  getToken() {
    return this.auth?.token;
  }
}
