import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  userDetails: any;
  body: any
  changePassword: any = FormGroup;
  editProfile: any = FormGroup;

  constructor(
    private _dashboard: DashboardService,
    private _shared: SharedService,
    private formBuilder: FormBuilder,
    private _router:Router

  ) { }
url(){

  this._router.navigate(['/dashboard'])
}


  ngOnInit(): void {
    this.userDetails = this._shared.getUserDetails();
    console.log(this.userDetails);
    let Id =
    {
      UserId: this.userDetails.UserId
    }
    console.log('Get users Info', Id);
    this._dashboard._getAllInfoApi(Id).subscribe((res:any) => {
      this.userInfo = res.data;
      console.log('Get',this.userInfo);

    })

    this.changePassword = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })

    this.editProfile = new FormGroup({
      name: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })

  }
  get passwordVail() {
    return this.changePassword.controls;
  }
  get editProfileVail() {
    return this.editProfile.controls;
  }

  savepassword() {
    let savePass = {
      currentPassword: this.changePassword.controls['currentPassword'].value,
      newPassword: this.changePassword.controls['currentPassword'].value,
    }
    console.log(savePass);
  }

  saveEditProfile() {
    let saveData = {

      UserId: this.userDetails.UserId,
      Name: this.editProfile.controls['name'].value,
      Username: this.userDetails.Username,
      Email: this.editProfile.controls['email'].value,
      UserPhoneNo: this.editProfile.controls['phone'].value,
      companyName: this.editProfile.controls['companyName'].value,
      Designation: "software",
      UserIsActive: 1,
      companyEmail: "ak@cylsys.com",
      companyURL: "www.cylsys.com",
      remark:  this.editProfile.controls['address'].value,
      companyLocation: this.editProfile.controls['country'].value,
      CompanyIsActive: 1,
      company_Id: 5

    }
    console.log("check",saveData);

    this._dashboard.updateProfile(saveData).subscribe((res:any)=>{
      console.log('done',res);
      if(res.success==true){
        this._shared.ToastPopup(res.message, '', 'success');

      }else{
        this._shared.ToastPopup(res.message, '', 'error');

      }
      
    })
    
  }


}
