import {Component, OnInit} from '@angular/core';
import {Character} from "../models/character";
import {CharacterService} from "../services/character.service";
import {PageInfo} from "../models/charactersPageable";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info?: PageInfo;
  lastScrollEventTime?: number;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters(this.info);
  }

  getCharacters(info?: PageInfo): void {
    this.characterService.getCharacters(info?.next).subscribe(characters => {
      this.characters = this.characters.concat(characters.results);
      this.info = characters.info;
    });
  }

  onScroll(event: any): void {
    if (this.lastScrollEventTime == undefined || (new Date()).getTime() - this.lastScrollEventTime > 1000) {
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
        this.lastScrollEventTime = new Date().getTime();
        this.getCharacters(this.info)
      }
    }
  }
}
