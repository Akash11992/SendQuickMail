import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DashboardService } from '../../services/dashboard.service';
import timezone from '../../../../file/timezone.json';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  addCompany: FormGroup;
  userDetails: any;
  getAllCountry:any;
  timrZone : {offset:string,name:string}[] = timezone;

  constructor(
    private formBuilder: FormBuilder,
    private _shared: SharedService,
    private _dashboard: DashboardService

  ) { }
  
  ngOnInit(): void {
    
    this.userDetails = this._shared.getUserDetails();
    
    
    this.addCompany = this.formBuilder.group({
      
      
      companyName: ['', [Validators.required]],
      companyEmail: ['', [Validators.required]],
      companyUrl: ['', [Validators.required]],
      companyNumber: ['', [Validators.required]],
      employeeNo: [''],
      city: [''],
      region: [''],
      zip: [''],
      streetAddress: [''],
      timeZone: [''],
      adddress: ['',],
      remark: [''],
      
      
    })
    console.log('Record', this.userDetails);
    console.log('timezone',JSON.stringify(this.timrZone));
    
    this._dashboard._getCountryApi().subscribe((res) => {
      this.getAllCountry=res;
      console.log(" GET country ", this.getAllCountry);
      // Countries
  
    })

  }
  get companyVail(){
    return this.addCompany.controls;
  }
clear(){
  this.addCompany.reset();

}


  resisterCompany() {
    let saveCompanyData = {
      companyName: this.addCompany.controls['companyName'].value,
      companyEmail: this.addCompany.controls['companyEmail'].value,
      companyURL: this.addCompany.controls['companyUrl'].value,
      remark: this.addCompany.controls['remark'].value,
      companyLocation: this.addCompany.controls['streetAddress'].value,
      UserId: this.userDetails.UserId,
      isActive:0

    }
    console.log(saveCompanyData);

    this._dashboard._postAddCompanyApi(saveCompanyData).subscribe((res:any) => {
      console.log("Data Saved", res);
      if(res.success==true){
        this._shared.ToastPopup('registered ', '', 'success');

      }else{

      }
      this.addCompany.reset();
    })

  }

} 
