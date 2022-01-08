import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationGRUPO08Service } from '../services/authentication-grupo08.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGRUPO08Guard implements CanLoad {
  constructor(private authService: AuthenticationGRUPO08Service, private router: Router) { }

  canLoad() {
    const isAuthenticated = !!this.authService.getUser();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
