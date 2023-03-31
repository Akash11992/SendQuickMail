import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import jwt_decode from "jwt-decode";
import { SharedService } from 'src/app/shared/services/shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  type: string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  // email = new FormControl('', [Validators.required, Validators.email]);
 

  signupForm!: FormGroup;
  constructor(
    private _signUp: FormBuilder,
    public _data:ProfileService,
    private _router: Router,
    private _shared:SharedService,
    private ngxService: NgxUiLoaderService,
    ) { }

  ngOnInit(): void {
    this._preConfig();
  }
  private _preConfig() {
    this._createSignUpForm();
  }
  private _createSignUpForm() {
    this.signupForm = this._signUp.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      username: new FormControl('',[Validators.minLength(10)]),
      checkbox:new FormControl(false,[Validators.requiredTrue]),
      password:new FormControl(null,[ (c: AbstractControl)=>Validators.required(c),Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      )]),
    })
  }
 
  signup() {
  //   fetch('https://jsonip.com', { mode: 'cors' }).then((resp) => resp.json())
  // .then((ipObj) => {
  //   if(!ipObj){
  //     throw new Error('Unable to trace IP Address')
  //   }

    let signUpData = {
      Name: this.signupForm.controls['name'].value,
      Username: this.signupForm.controls['username'].value,
      Email: this.signupForm.controls['email'].value,
      Password: this.signupForm.controls['password'].value,

    }

    console.log("res",signUpData)
    this.ngxService.start();
    this._data._postSignUpApi(signUpData).subscribe(
      (res: any) => {
        console.log("registered",res);
        if(res.success==true){
          this.ngxService.stop();
          this._shared.ToastPopup('Successfully',res.message,'success');
            this._router.navigate(['/login'])
          this.signupForm.reset();

        }else{
          this._shared.ToastPopup('password',res.message,'error');

        }
      //   console.log("registered",res);
      //   this._router.navigate(['/login'])
      // this.signupForm.reset();
     

      })
    // })
  }
  get signUpVail() {
    return this.signupForm.controls;
  }

  
  get firstnameVail() {
    return this.signupForm.get('name')
  }

  get lastnameVail() {
    return this.signupForm.get('lastname')
  }

  get emailVail() {
    return this.signupForm.get('email')
  }

  get mobileVail() {
    return this.signupForm.get('mobile')
  }
  get passwordVail() {
    return this.signupForm.get('password')
  }

  

}


