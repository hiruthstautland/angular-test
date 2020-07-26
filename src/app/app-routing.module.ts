import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: 'test', component: FirstComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
