import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character-class';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.css']
})
export class CharacterCardListComponent implements OnInit {
  characters: Character[];

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters()
      .subscribe(
        (characters) => {
          this.characters = characters.results;
        });
  }

}
