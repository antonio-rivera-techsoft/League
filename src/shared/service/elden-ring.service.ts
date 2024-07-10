import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Npc} from '../models/elden ring/npcs/npc';
import { NpcApiResponse } from '../models/elden ring/npcs/npcApiResponse';
import { BossApiResponse } from '../models/elden ring/bosses/bossApiResponse';
import { Boss } from '../models/elden ring/bosses/boss';

const baseUrl:string = "https://eldenring.fanapis.com/api/";
const offset = 100;


@Injectable({
  providedIn: 'root'
})
export class EldenRingService {

  private http = inject(HttpClient);

  constructor() { }

  public getAllNpcs(){
    return this.http.get<NpcApiResponse>(`${baseUrl}npcs?limit=${offset}`);
  }

  public getNpcById(id: string) {
    return this.http.get<NpcApiResponse>(`${baseUrl}npcs/:${id}`);
  }

  public getAllBosses(){
    return this.http.get<BossApiResponse>(`${baseUrl}bosses?limit=${offset}`);
  }

  public getBossById(id: string) {
    return this.http.get<BossApiResponse>(`${baseUrl}bosses/:${id}`);
  }
}
