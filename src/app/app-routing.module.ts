import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGRUPO08Guard } from './guards/admin-grupo08.guard';
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
    path: 'user-edit',
    loadChildren: () =>
      import('./pages/user-edit-grupo08/user-edit-grupo08.module').then(
        (m) => m.UserEditGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard],
  },
  {
    path: 'diet-list',
    loadChildren: () =>
      import('./pages/diet-list-grupo08/diet-list-grupo08.module').then(
        (m) => m.DietListGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, EmployeeGRUPO08Guard],
  },
  {
    path: 'diet-edit/:id',
    loadChildren: () =>
      import('./pages/diet-edit-group08/diet-edit-group08.module').then(
        (m) => m.DietEditGROUP08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, EmployeeGRUPO08Guard],
  },
  {
    path: 'diet-edit',
    loadChildren: () =>
      import('./pages/diet-edit-group08/diet-edit-group08.module').then(
        (m) => m.DietEditGROUP08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, EmployeeGRUPO08Guard],
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./pages/user-list-grupo08/user-list-grupo08.module').then(
        (m) => m.UserListGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, AdminGRUPO08Guard],
  },
  {
    path: 'employee-list',
    loadChildren: () =>
      import('./pages/employee-list-grupo08/employee-list-grupo08.module').then(
        (m) => m.EmployeeListGRUPO08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, AdminGRUPO08Guard],
  },
  {
    path: 'employee-edit/:id',
    loadChildren: () =>
      import('./pages/employee-edit-grupo08/employee-edit-grupo08.module').then(
        (m) => m.EmployeeEditGRUPO08PageModule
      ),
  },
  {
    path: 'employee-edit',
    loadChildren: () =>
      import('./pages/employee-edit-grupo08/employee-edit-grupo08.module').then(
        (m) => m.EmployeeEditGRUPO08PageModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'payment-list',
    loadChildren: () =>
      import('./pages/payment-list-groupo08/payment-list-groupo08.module').then(
        (m) => m.PaymentListGroupo08PageModule
      ),
    canLoad: [AuthGRUPO08Guard, AdminGRUPO08Guard],
  },
  {
    path: 'payment-edit',
    loadChildren: () =>
      import('./pages/payment-edit-grupo08/payment-edit-grupo08.module').then(
        (m) => m.PaymentEditGrupo08PageModule
      ),
  },
  {
    path: 'payment-edit/:id',
    loadChildren: () =>
      import('./pages/payment-edit-grupo08/payment-edit-grupo08.module').then(
        (m) => m.PaymentEditGrupo08PageModule
      ),
  },
  {
    path: 'exercise-list',
    loadChildren: () =>
      import('./pages/exercise-list-grupo08/exercise-list-grupo08.module').then(
        (m) => m.ExerciseListGrupo08PageModule
      ),
  },
  {
    path: 'exercise-edit',
    loadChildren: () =>
      import('./pages/exercise-edit-grupo08/exercise-edit-grupo08.module').then(
        (m) => m.ExerciseEditGrupo08PageModule
      ),
  },
  {
    path: 'exercise-edit/:id',
    loadChildren: () =>
      import('./pages/exercise-edit-grupo08/exercise-edit-grupo08.module').then(
        (m) => m.ExerciseEditGrupo08PageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
