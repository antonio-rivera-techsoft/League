import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../../../shared/service/champions.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-champion-list',
  standalone: false,
  template: `
    <div class="content">
      <h2>Champions</h2>

      <div class="spacer"></div>
      <!-- <app-search-bar (filterValueEvent)="filterExpression($event)"></app-search-bar> -->
      <div class="pokemon-gallery">

        <!-- @for(champion of championsList | filter: filterValue ; track champion.name){ -->
        @for(champion of championsList; track champion.name){

        <div
          appHover
          class="pokemon-card"
          (click)="redirectToDetails(champion.key)"
        >
          <div class="pokemon-image">
            <img
              src="{{ champion.image }}"
              alt="{{ champion.name }}"
            />
          </div>

          <div class="pokemon-details">
            <div class="pokemon-id">{{ champion.key }}</div>

            <div class="pokemon-name">{{ champion.id }}</div>

            <div *ngFor="let tag of champion.detail.tags">
              <!-- <div class="pokemon-type1" [appPokemonType]="type.type.name">
                {{ type.type.name }}
              </div> -->
              <div class="pokemon-type1" [appChampionType]="tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  styleUrl: './champion-list.component.scss',
})
export class ChampionListComponent implements OnInit {
  championsList: any[] = [];

  constructor(
    private championService: ChampionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.championService.getChampions().subscribe((c) => {
      this.championsList = c
      console.log(this.championsList);
    });

  }

  redirectToDetails(pokemonId: string) {
    this.router.navigate(['pokemon-details', pokemonId]);
  }
}
