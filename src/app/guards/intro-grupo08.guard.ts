import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroGRUPO08Guard implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
    const hasSeen =
      !!JSON.parse(localStorage.getItem('tribo:auth'))?.hasSeen ?? false;

    if (hasSeen) {
      return true;
    } else {
      this.router.navigateByUrl('/plans', { replaceUrl: true });
      return false;
    }
  }
}
