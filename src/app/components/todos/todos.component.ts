import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../service/todos.service';
import { Todos } from './../../models/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todos[];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.sendGetRequest().subscribe((data: Todos[]) => {
      this.todos = data;
    });
  }
  deleteTodoMethode(todo: Todos) {
    console.log('del', todo.id);
    let deletedFromServer: boolean;
    // delete from server
    try {
      this.todoService.sendDelRequest(todo).subscribe();
      deletedFromServer = true;
    } catch (e) {
      console.log("Couldn't delete!");
      deletedFromServer = false;
    }
    // delete from UI
    if (deletedFromServer) {
      this.todos = this.todos.filter((td) => td.id !== todo.id);
    }
  }
}
