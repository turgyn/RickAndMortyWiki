import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Episode} from "../models/episode";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisode(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }
}
