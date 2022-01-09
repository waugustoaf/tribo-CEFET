import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationGRUPO08Service } from '../services/authentication-grupo08.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGRUPO08Guard implements CanLoad {
  constructor(
    private authService: AuthenticationGRUPO08Service,
    private router: Router
  ) {}

  canLoad() {
    const isEmployee =
      this.authService?.getUser()?.role === 'employee' ||
      this.authService?.getUser()?.role === 'administrator';

    if (!isEmployee) {
      this.router.navigateByUrl('/home');
      return false;
    }

    return true;
  }
}
