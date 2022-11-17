import {Character} from "./character";

export interface PageInfo {
  count: number
  pages: number
  next: string
  prev: string
}

export interface CharactersPageable {
  info: PageInfo
  results: Character[]
}
