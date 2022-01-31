import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { IUserProps } from 'src/app/dtos/user';
import { AuthenticationGRUPO08Service } from 'src/app/services/authentication-grupo08.service';

interface PageProps {
  title: string;
  route: string;
}

@Component({
  selector: 'app-home-guarded-grupo08',
  templateUrl: './home-guarded-grupo08.page.html',
  styleUrls: ['./home-guarded-grupo08.page.scss'],
})
export class HomeGuardedGRUPO08Page implements OnInit {
  private user: IUserProps;
  private pages: PageProps[];

  constructor(
    private authService: AuthenticationGRUPO08Service,
    private alertController: AlertController,
    private navController: NavController
  ) {
    this.user = this.authService.getUser();

    if (this.user.role === 'employee') {
      this.pages = [
        { title: 'Gerenciar dietas', route: '/diet-list' },
        { title: 'Gerenciar exercícios', route: '/exercise-list' },
        { title: 'Gerenciar dietas', route: '/diet-list' },
        { title: 'Gerenciar exercícios', route: '/exercise-list' },
      ];
    } else if (this.user.role === 'administrator') {
      this.pages = [
        { title: 'Gerenciar dietas', route: '/diet-list' },
        { title: 'Gerenciar clientes', route: '/user-list' },
        { title: 'Gerenciar funcionários', route: '/employee-list' },
        { title: 'Gerenciar pagamentos', route: '/payment-list' },
        { title: 'Gerenciar exercícios', route: '/exercise-list' },
      ];
    }
  }

  ngOnInit() {}

  formatActive = (state: boolean) => (state ? 'Ativo' : 'Inativo');

  async logout() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sair',
          handler: () => {
            this.authService.signOut();
            this.navController.navigateRoot('/login');
          },
        },
      ],
    });

    await alert.present();
  }
}
