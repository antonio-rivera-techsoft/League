import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionTypeDirective } from './directives/champion-type.directive';
import { ChampionsService } from './service/champions.service';



@NgModule({
  declarations: [ChampionTypeDirective],
  imports: [
    CommonModule,
  ],
  exports: [ChampionTypeDirective],
  providers: [ChampionsService],  
})
export class SharedModule { }
