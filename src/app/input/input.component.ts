import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `

      <input [value]="title" 
      (keyup.enter)="changeTitle($event.target.value)"
      #inputElement>
      <button (click)="changeTitle('Button Clicked!')">
      Save
      </button>

      <p>The title is: {{title}}</p>
     `,
  
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string ='my title';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { 
   
  }

  ngOnInit() {
    
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}

