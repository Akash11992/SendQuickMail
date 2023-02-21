import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular_Full_Course';
  title="Reusable Component App Compnt To UserDetail Compnt"
userDetails=[
  {name:'Akash Chouhan',email:'Akash@gmail.com'},
  {name:'Sandhya Chouhan',email:'Sandhya@gmail.com'},
  {name:'Deepak Chouhan',email:'Deepak@gmail.com'},
  {name:'Harshita Chouhan',email:'Harshita@gmail.com'},
]
data="ABC";
updateData(item:string)
{
 console.warn(item);
 this.data=item;
}
}
