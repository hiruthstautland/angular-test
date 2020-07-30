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
}
