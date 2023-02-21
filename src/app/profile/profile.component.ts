import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent   {

  name:string = "Akash chouhan";
  age:number=29;
  status:string='coder';
  salary:number =100;

getname(){

  return'I Have A SUPER POWER ';
}
btnColor:string; 
isdisabled:boolean = true;

constructor(){
setTimeout(()=>{
  this.isdisabled = false; 
}, 3000)
const colors = ['red','pink','yellow ','blue','black'];
this.btnColor = colors[Math.floor(Math.random() * 5)];

}

converttoINR(){
  alert(this.salary*74)
}
}
