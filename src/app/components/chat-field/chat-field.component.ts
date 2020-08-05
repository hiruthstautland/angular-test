import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-field',
  templateUrl: './chat-field.component.html',
  styleUrls: ['./chat-field.component.scss'],
})
export class ChatFieldComponent implements OnInit {
  availableFriends: Array<Object>;
  suggestions: Array<Object> = [];
  currentRows: number = 3;
  textInArea: string = '';

  constructor() {}

  ngOnInit(): void {}
  getSuggestions() {
    // check for match
    this.textFunction();
  }
  // autocomp
  findFriend(input: string, availableSuggestions: Array<Object>): void {
    this.suggestions = availableSuggestions.filter((sug: Object) => {
      return (
        sug['name'].substr(0, input.length).toLowerCase() ===
        input.toLowerCase()
      );
    });
  }
  textFunction(): string {
    let re = /@\w+/i;
    let text = this.textInArea;
    let addContact = text.match(re);
    // detect @ with following chars
    if (addContact) {
      // get/fetch possible friends preff after @detected
      this.availableFriends = this.friendsObj;
      // get name (after @)
      let handler = addContact[0].slice(1);
      // check if handler matches friends
      this.findFriend(handler, this.availableFriends);
    }

    return this.textInArea;
  }
  friendsObj = [
    { name: 'Hiruth' },
    { name: 'Cindy' },
    { name: 'Charlize' },
    { name: 'Cathy' },
    { name: 'casanova' },
    { name: 'clippers' },
    { name: 'Zara' },
    { name: 'Althea' },
    { name: 'Therese' },
    { name: 'Elise' },
  ];
}
