import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title="Add TASK"
  list:any[]=[];
    addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);

  }
  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
