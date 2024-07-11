import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionTypeDirective } from './directives/champion-type.directive';
import { ChampionsService } from './service/champions.service';
import { EldenRingService } from './service/elden-ring.service';



@NgModule({
  declarations: [ChampionTypeDirective],
  imports: [
    CommonModule,
  ],
  exports: [ChampionTypeDirective],
  providers: [ChampionsService, EldenRingService],  
})
export class SharedModule { }
