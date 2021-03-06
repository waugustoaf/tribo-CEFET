import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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

  constructor(
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.auth = JSON.parse(localStorage.getItem('tribo:auth')) as IAuthProps;
    this.isAuthenticated.next(!!this.auth?.token);
  }

  set<KeyType extends keyof IAuthProps>(
    key: KeyType,
    value: IAuthProps[KeyType]
  ) {
    this.auth[key] = value;
    localStorage.setItem('tribo:auth', JSON.stringify(this.auth));
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
      await this.showToast(throwErrors(err, 'Usu??rio e/ou senha inv??lidos.'));
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
        throwErrors(err, 'N??o foi poss??vel criar o usu??rio.')
      );
      return false;
    }
  }

  async editUser(userProps: CreateUserProps, id: string): Promise<boolean> {
    try {
      const { data } = await api.put<IUserProps>('/users/' + id, {
        ...userProps,
      });

      if (data.id === this.auth.user.id) {
        this.set('user', data);
      }

      return true;
    } catch (err) {
      await this.showToast(
        throwErrors(err, 'N??o foi poss??vel editar o usu??rio.')
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
    localStorage.setItem('tribo:auth', JSON.stringify(auth));
    this.navController.navigateRoot('/login');
  }

  clearAuth() {
    const oldAuth = JSON.parse(
      localStorage.getItem('tribo:auth')
    ) as IAuthProps;

    const auth: IAuthProps = {
      hasSeen: oldAuth?.hasSeen ?? false,
      token: '',
      user: null,
    };

    this.isAuthenticated.next(!!auth?.token);
    localStorage.setItem('tribo:auth', JSON.stringify(auth));
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
