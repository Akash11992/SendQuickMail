import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
  constructor(public _http: HttpClient) { }

  _postLoginApi(loginBody: object){
    return this._http.post(`${this.apiUrl}/login`,loginBody);
    console.log(loginBody);
    
  }
  _postSignUpApi(signupBody: object){
    return this._http.post(`${this.apiUrl}/inviteuser`,signupBody);
  }
}
