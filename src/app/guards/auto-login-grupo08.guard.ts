import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
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
    const isAuthenticated = !!this.authService.getUser();

    if (isAuthenticated) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      return true;
    }
  }
}
