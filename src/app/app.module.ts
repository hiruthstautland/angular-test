import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CardComponent } from './components/card/card.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/todos/header/header.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { GetTeamsComponent } from './components/get-teams/get-teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CalculatorComponent,
    CardComponent,
    TodosComponent,
    HeaderComponent,
    TodoItemComponent,
    AddTodoComponent,
    GetTeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
