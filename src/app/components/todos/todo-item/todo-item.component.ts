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
  checked: boolean = false;
  updateTodo: any = {};
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  // dynamic classes
  toggleCompleted() {
    let complete = this.todo.completed;
    this.checked = complete;
    let classes = {
      'todoitem__title-complete': complete,
    };
    return classes;
  }
  // onToggle
  onToggle() {
    // Toggle in UI
    this.todo.completed = !this.todo.completed;
    // Toggle on server
    //set in db instead of console.logging
    this.updateTodo = this.todosService
      .sendPutRequest(this.todo)
      .subscribe((data) => console.log('completed', data.completed));
  }

  onDelete(todo: Todos) {
    this.deleteTodo.emit(todo);
  }

  ngOnDestroy(): void {
    this.updateTodo.unsubscribe();
  }
}
