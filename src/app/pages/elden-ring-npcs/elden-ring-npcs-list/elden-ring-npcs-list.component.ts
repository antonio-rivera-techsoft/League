import { Component, OnInit } from '@angular/core';
import { Npc } from '../../../../shared/models/elden ring/npcs/npc';
import { EldenRingService } from '../../../../shared/service/elden-ring.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-elden-ring-npcs-list',
  standalone: false,
  template: `
    <div class="content">
      <h2>NPCs</h2>
      <div class="spacer"></div>
      <div class="pokemon-gallery">

        @for(npc of npcsList  ; track npc.name){
        <div appHover class="pokemon-card">
        <!-- (click)="redirectToDetails(pokemon.detail.id)" -->

          <div class="pokemon-image"><img src="{{ npc.image }}" alt="pokemonIMG"/> </div>

          <div class="pokemon-details">
            <div class="pokemon-name">Name: {{ npc.name }}</div>
            <div class="pokemon-name">Role: {{ npc.role }}</div>
            <div class="pokemon-name">Location: {{ npc.location }}</div>
          </div>
          
        </div>
        }
      </div>
    </div>
  `,
  styleUrl: './elden-ring-npcs-list.component.scss'
})
export class EldenRingNpcsListComponent implements OnInit{
  npcsList: Npc[] = [];

  constructor(private pokeservice: EldenRingService, private router: Router) {}

  ngOnInit(): void {
    this.pokeservice
      .getAllNpcs()
      .pipe(
        map((response) => {
          response.data.forEach((npc: Npc) => {
            this.pokeservice
              .getNpcById(npc.id)
              .subscribe((n) => (npc = n.data[0]));
          });
          console.log(response.data);
          return response.data;
        })
      )
      .subscribe((l) => (this.npcsList = l));
  }
}
