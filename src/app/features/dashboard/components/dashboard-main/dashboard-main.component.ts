import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  showFiller = false;
  userDetails:any;
  constructor(
    private _shared: SharedService,
    private router:Router,
    private _route: ActivatedRoute,

    ) { }

  ngOnInit(): void {
    this.userDetails = this._shared.getUserDetails();
console.log("message",this.userDetails);

  }
url(){

  this.router.navigateByUrl('/login')
}
profile(){
  this.router.navigateByUrl('/profile')
}
}
