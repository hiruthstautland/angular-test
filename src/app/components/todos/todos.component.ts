import { Component, OnInit } from '@angular/core';
import { Todos } from './../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss', './../../common/style.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todos[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, title: 'Todo One', completed: false },
      { id: 2, title: 'Todo Two', completed: false },
      { id: 3, title: 'Todo Three', completed: false },
      { id: 4, title: 'Todo Four', completed: false },
    ];
  }
}