import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];
  @Input() title: string;
  @Input() completed: boolean;

  constructor(public todoService:TodoService) { }

  ngOnInit() {
    this.todos = [
      {
        title: 'Take out the trash',
        completed: false
      },
      {
        title: 'Go to the bank',
        completed: false
      },
      {
        title: 'Walk the dog',
        completed: false
      }
    ]
  } 
  
  addTodo(title) {
    this.todos.push({title: title, completed: false})
  }    

  // searchText() {
  // return this.title.filter(todo => {
  //    if (this.filter) {
  //      return todo.task.includes(this.filter);
  //    } else {
  //      return true;
  //    }
  //  });
}
  
