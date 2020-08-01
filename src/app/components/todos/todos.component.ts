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
    this.todoService.sendGetRequest().subscribe((data: any[]) => {
      this.todos = data;
    });
  }
}
