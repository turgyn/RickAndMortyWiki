import { Injectable } from '@angular/core';
import {Character} from "../models/character";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharactersPageable} from "../models/charactersPageable";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://rickandmortyapi.com/api/character/"

  getCharacters(url?: string): Observable<CharactersPageable> {
    if (url) return this.http.get<CharactersPageable>(url);
    return this.http.get<CharactersPageable>(this.baseUrl);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.baseUrl + id);
  }
}
