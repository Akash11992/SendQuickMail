import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileMainComponent } from './component/profile-main/profile-main.component';
import { NonAuthguardGuard } from 'src/app/auth/auth/non-authguard.guard';

const routes: Routes = [{
  path:'',
    component:ProfileMainComponent,
  // canActivate:[NonAuthguardGuard],
  children:[

    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: RegistrationComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
