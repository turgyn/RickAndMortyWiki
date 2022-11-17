import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../services/character.service";
import {Character} from "../models/character";
import {Location} from "@angular/common";
import {Episode} from "../models/episode";
import {EpisodeService} from "../services/episode.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService,
    private episodeService: EpisodeService
) {}

  character?: Character = undefined;
  episodes: Episode[] = []

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.characterService.getCharacter(id).subscribe(ch => {
      this.character = ch;
      ch.episode.forEach(episode => {
        this.episodeService.getEpisode(episode).subscribe(ep => this.episodes.push(ep))
      })
    });
  }

}
