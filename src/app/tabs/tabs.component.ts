import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name: 'Luke Skywalker',
      side: ''
    },
    {
      name: 'Darth Vader',
      side: ''
    }
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(listFilterValue) {
    this.chosenList = listFilterValue;
  }

  getCharacters() {
    return this.characters.filter(character => {
      return this.chosenList === 'all' || character.side === this.chosenList;
    });
  }

  onSideChosen(charInfo) {
    console.log(charInfo)
    const pos = this.characters.findIndex((character) => {
      return character.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }

}
