import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl;
  constructor(
    public _http: HttpClient
  ) { }


  _postAddCompanyApi(addCompany: object) {
  return this._http.post(`${this.apiUrl}/subs`, addCompany);
  }
  _postAddSubscriberApi(addSubscriber: object) {
  return this._http.post(`${this.apiUrl}/contact`, addSubscriber);
  }
  _getAllContactApi() {
  return this._http.get(`${this.apiUrl}/getall`);
  }
  _getCountryApi() {
    return this._http.get('https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json');
  }
  _postSegmentApi(addSegment: object) {
  return this._http.post(`${this.apiUrl}/Segment`,addSegment);
  } 
  _getSegmentApi() {
  return this._http.get(`${this.apiUrl}/getSegment`);
  }
  _getAllInfoApi(Obj: object) {
    // console.log( JSON.stringify(Obj));
  return this._http.post(`${this.apiUrl}/allCompaniesByUserId/UserId:UserId`,Obj) ;
  }
  _deleteSegmentApi(id:number) {
  return this._http.delete(`${this.apiUrl}/DeleteSegment/`+id);
  }

  updateProfile(updateData:object){
    return this._http.put(`${this.apiUrl}/updateUserByUserId`,updateData)
  }
}
