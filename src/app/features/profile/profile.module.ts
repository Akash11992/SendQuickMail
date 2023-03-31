import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileMainComponent } from './component/profile-main/profile-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ProfileMainComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),

  ]
})
export class ProfileModule { }
