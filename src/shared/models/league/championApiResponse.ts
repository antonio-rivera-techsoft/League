import { Champion } from "./champion";

export interface ChampionAPIResponse {
    count: number;
    next: string;
    previous: string;
    data: Champion[];
  }