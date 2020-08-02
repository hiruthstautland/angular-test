import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/models/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = 'Add Todo';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };
    this.addTodo.emit(todo);
  }
}
