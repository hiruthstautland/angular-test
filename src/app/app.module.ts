import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CardComponent } from './components/card/card.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { GetTeamsComponent } from './components/get-teams/get-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CalculatorComponent,
    CardComponent,
    TodosComponent,
    TodoItemComponent,
    GetTeamsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
