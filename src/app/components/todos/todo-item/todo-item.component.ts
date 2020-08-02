import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/models/Todos';
import { TodosService } from './../../../service/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();

  constructor(private todosService: TodosService) {}

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
  onToggle(todo: Todos) {
    // Toggle in UI
    todo.completed = !this.todo.completed;
    // Toggle on server
    this.todosService
      .sendPutRequest(todo)
      //set in db instead of console.logging
      .subscribe((data) => console.log('completed', data.completed));
  }
  onDelete(todo: Todos) {
    this.deleteTodo.emit(todo);
  }
}
