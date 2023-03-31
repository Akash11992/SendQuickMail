import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { SharedService } from 'src/app/shared/services/shared.service';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { NgxUiLoaderService } from 'ngx-ui-loader';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  email = new FormControl('', [Validators.required, Validators.email]);


  loginForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public _data: ProfileService,
    private _router: Router,
    private _shared: SharedService,
    private ngxService: NgxUiLoaderService,


  ) { }

  ngOnInit(): void {
    this._preConfig();
  }
  private _preConfig() {
    this._createLoginForm();
  }
  private _createLoginForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }



  submitLoginForm() {
    //   fetch('https://jsonip.com', { mode: 'cors' }).then((resp) => resp.json())
    // .then((ipObj) => {
    //   if(!ipObj){
    //     throw new Error('Unable to trace IP Address')
    //   }

    let loginData = {
      Email: this.loginForm.controls['email'].value,
      Password: this.loginForm.controls['password'].value,
    }
    this.ngxService.start();

    console.log("res", loginData)
    this._data._postLoginApi(loginData).subscribe(
      (res:any) => {
        this.ngxService.stop();
        if(res.success==true){
          this._shared.ToastPopup('',res.message,'success');
          this._shared.setJWTToken(res['res']);
          this._shared.setUserDetails(res['data'][0]);
          this._router.navigate(['/dashboard'])
          console.log("hello", res['data'][0]);

        }else{
          this._shared.ToastPopup('',res.message,'error');

        }
        // alert(res.status)

      })

    // })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get userNameVail() {
    return this.loginForm.get('email')
  }


  get passwordVail() {
    return this.loginForm.get('password')
  }





  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }


}
