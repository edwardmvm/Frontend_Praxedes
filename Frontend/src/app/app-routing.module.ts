import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { OperationComponent } from './operation/operation.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'operation', component: OperationComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/auth' },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/registrar/registrar.module').then(m => m.RegistrarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
