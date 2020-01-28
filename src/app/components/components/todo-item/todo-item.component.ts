import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todos: Todo;
  @Input() id: number;


  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    this.todos.splice(this.id -1 , 1);
  }
}
