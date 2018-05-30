import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../classes/character-class';

@Component({
  selector: 'app-charcter-card',
  templateUrl: './charcter-card.component.html',
  styleUrls: ['./charcter-card.component.css']
})
export class CharcterCardComponent implements OnInit {
  @Input() character: Character;
  constructor() { }

  ngOnInit() {
  }

}
