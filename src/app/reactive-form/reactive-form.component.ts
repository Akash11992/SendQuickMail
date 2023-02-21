import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
title="Reactive Form with Validation"
loginform = new FormGroup({
  user:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)])

});

loginUser()
{
  console.warn(this.loginform.value);
}

get userVail()
{
  return this.loginform.get('user')
}
get passwordVail()
{
  return this.loginform.get('password')
}

constructor() { }

  ngOnInit(): void {
  }

}
