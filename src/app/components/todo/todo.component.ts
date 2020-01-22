import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

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

}
