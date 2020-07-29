import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss', './../../common/style.scss'],
})
export class FirstComponent implements OnInit {
  text: string = `hello: `;
  arrayOfNumbers: number[] = [12, 22, 54, 12, 43];
  isBlue: boolean = false;
  name: string = `hIRUTH`;
  date: object = new Date();
  isDisabled: boolean = false;
  disabled: boolean = true;
  mood: string = '...';
  weather: string = '...';

  onClick() {
    console.log('click');
    this.isBlue = !this.isBlue;
  }
  constructor() {}

  ngOnInit(): void {}
}
