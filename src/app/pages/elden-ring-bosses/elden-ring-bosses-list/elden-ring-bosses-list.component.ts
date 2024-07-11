import { Component } from '@angular/core';
import { Boss } from '../../../../shared/models/elden ring/bosses/boss';
import { EldenRingService } from '../../../../shared/service/elden-ring.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-elden-ring-bosses-list',
  standalone: false,
  template: `
<div class="content">
      <h2>Bosses</h2>
      <div class="spacer"></div>
      <div class="pokemon-gallery">

        @for(boss of bossesList  ; track boss.name){
        <div appHover class="pokemon-card">
        <!-- (click)="redirectToDetails(pokemon.detail.id)" -->

          <div class="pokemon-image"><img src="{{ boss.image }}" alt="pokemonIMG"/> </div>

          <div class="pokemon-details">
            <div class="pokemon-name">Name: {{ boss.name }}</div>
            <div class="pokemon-name">Role: {{ boss.description }}</div>
            <div class="pokemon-name">Location: {{ boss.region }}</div>
          </div>
          
        </div>
        }
      </div>
    </div>
  `,
  styleUrl: './elden-ring-bosses-list.component.scss'
})
export class EldenRingBossesListComponent {
  bossesList: Boss[] = [];

  constructor(private bossesService: EldenRingService, private router: Router) {}

  ngOnInit(): void {
    this.bossesService
      .getAllBosses()
      .pipe(
        map((response) => {
          response.data.forEach((boss: Boss) => {
            this.bossesService
              .getBossById(boss.id)
              .subscribe((n) => (boss = n.data[0]));
          });
          console.log(response.data);
          return response.data;
        })
      )
      .subscribe((l) => (this.bossesList = l));
  }
}
