import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;

  constructor() {}

  ngOnInit(): void {}

  // dynamic classes
  setClasses() {
    let complete = this.todo.completed;
    let classes = {
      todoitem: true,
      'todoitem-complete': complete,
    };
    return classes;
  }
  // onToggle
  onToggle(todo) {
    todo.completed = !this.todo.completed;
  }
  onDelete(todo) {
    let id = document.getElementById(todo.id)
    
    console.log(document.getElementById(todo.id));
    console.log(todo.id);
  }
}
