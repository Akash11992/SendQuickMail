import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title="send data Child to Parent Component"

  constructor() { }
@Output() updateDataEvent =new EventEmitter<string>()
  ngOnInit(): void {
  }

}
