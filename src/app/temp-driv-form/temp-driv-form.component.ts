import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driv-form',
  templateUrl: './temp-driv-form.component.html',
  styleUrls: ['./temp-driv-form.component.css']
})
export class TempDrivFormComponent implements OnInit {
  title="Template Drive Form with Validation"
  userLog(item:any)
  {
      console.warn(item);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
