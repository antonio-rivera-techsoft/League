import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './champions.routes';
import { ChampionsComponent } from './champions.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChampionsComponent, ChampionListComponent, ChampionDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  bootstrap: [ChampionsComponent]
})
export class ChampionsModule { }
