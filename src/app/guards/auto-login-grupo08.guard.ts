import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationGRUPO08Service } from '../services/authentication-grupo08.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGRUPO08Guard implements CanLoad {
  constructor(
    private authService: AuthenticationGRUPO08Service,
    private router: Router
  ) {}

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userLogged = this.authService.getUser();

    if (!!userLogged) {
      if (
        userLogged?.role === 'administrator' ||
        userLogged?.role === 'employee'
      ) {
        this.router.navigateByUrl('/home-guarded', { replaceUrl: true });
      } else {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    } else {
      return true;
    }
  }
}
