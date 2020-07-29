import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './../../common/style.scss'],
})
export class CardComponent implements OnInit {
  peopleArray: object[] = [
    { name: 'Eirik', age: '24', about: 'Is from Bømlo.' },
    { name: 'Mina', age: '25', about: 'Is from Stavanger.' },
    { name: 'Kariann', age: '31', about: 'Is from Odda.' },
    { name: 'Mamma', age: '60', about: 'Is from Lista, Vanse.' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
