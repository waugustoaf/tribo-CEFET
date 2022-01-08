import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGRUPO08Guard } from './guards/auth-grupo08.guard';
import { AutoLoginGRUPO08Guard } from './guards/auto-login-grupo08.guard';
import { EmployeeGRUPO08Guard } from './guards/employee-grupo08.guard';
import { IntroGRUPO08Guard } from './guards/intro-grupo08.guard';

const routes: Routes = [
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
    canLoad: [AuthGRUPO08Guard],
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./pages/plans-grupo08/plans-grupo08.module').then(
        (m) => m.PlansGRUPO08PageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-grupo08/login-grupo08.module').then(
        (m) => m.LoginGRUPO08PageModule
      ),
    canLoad: [IntroGRUPO08Guard, AutoLoginGRUPO08Guard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup-grupo08/signup-grupo08.module').then(
        (m) => m.SignupGRUPO08PageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-grupo08/home-grupo08.module').then(
        (m) => m.HomeGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard],
  },
  {
    path: 'home-guarded',
    loadChildren: () =>
      import('./pages/home-guarded-grupo08/home-guarded-grupo08.module').then(
        (m) => m.HomeGuardedGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, EmployeeGRUPO08Guard],
  },
  {
    path: 'user-edit/:id',
    loadChildren: () =>
      import('./pages/user-edit-grupo08/user-edit-grupo08.module').then(
        (m) => m.UserEditGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
