import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CardComponent } from './components/card/card.component';
import { FirstComponent } from './components/first/first.component';
import { TodosComponent } from './components/todos/todos.component';
import { GetTeamsComponent } from './components/get-teams/get-teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: FirstComponent },
  { path: 'card', component: CardComponent },
  { path: 'todos', component: TodosComponent },
  // { path: 'card/:id', component: CardComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'get-teams', component: GetTeamsComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
