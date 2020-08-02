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

// In a big project, create a specific module for Material and export MatModules
// to be used in all modules and components of the project
// by importing only one module, your “MaterialModule”.
// Otherwise, you have to import the MatModules every time in each module.
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
