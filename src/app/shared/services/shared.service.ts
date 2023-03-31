import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {



  isisExpandedNavSideBar = new BehaviorSubject(true);
  userUpdated = new Subject();
  headerTabOptionSelected = new Subject();
  constructor(
    private _toastr: ToastrService,
   
  ) { }

 

  ToastPopup(errorMsg: string, errorModule: string, errorType: string) {
    switch (errorType) {
      case 'error':
        this._toastr.error(errorMsg, errorModule, {
          progressBar: true
        });
        break;
      case 'info':
        this._toastr.info(errorMsg, errorModule, {
          progressBar: true
        });
        break;
      case 'success':
        this._toastr.success(errorMsg, errorModule, {
          progressBar: true
        });
        break;
    }
  }

 
  getJWTToken() {
    return localStorage.getItem('res');
  }

  setJWTToken(res:string){
    localStorage.setItem('res',res);
  }

  removeJWTToken(){
    localStorage.removeItem('res');
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('userDetails') || '{}');
  }

  setUserDetails(userDetails: any ){
    localStorage.setItem('userDetails',JSON.stringify(userDetails));
  }

  removeUserDetails(){
    localStorage.removeItem('userDetails');
  }
}

