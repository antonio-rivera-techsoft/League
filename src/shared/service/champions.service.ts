import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ChampionAPIResponse } from '../models/league/championApiResponse';
import { map, Observable } from 'rxjs';
import { Champion } from '../models/league/champion';

const baseUrl:string = "https://ddragon.leagueoflegends.com/cdn/4.7.16/data/en_US/champion.json";

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private http = inject(HttpClient);

  constructor() { }

  getChampions(): Observable<Champion[]> {
    return this.http.get<ChampionAPIResponse>(`${baseUrl}`).pipe(
      map((response: ChampionAPIResponse) => {
        console.log(response.data);
        return Object.values(response.data);
      }),

    );
  }

}
