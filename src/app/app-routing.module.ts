import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardComponent } from './card/card.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: FirstComponent },
  { path: 'card', component: CardComponent },
  // { path: 'card/:id', component: CardComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

