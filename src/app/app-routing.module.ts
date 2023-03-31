import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/profile/component/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {
    path: '',
    loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
    
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
