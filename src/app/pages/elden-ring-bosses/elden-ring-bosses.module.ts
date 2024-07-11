import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EldenRingBossesComponent } from './elden-ring-bosses.component';
import { EldenRingBossesListComponent } from './elden-ring-bosses-list/elden-ring-bosses-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { routes } from './elden-ring-npcs.bosses.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [EldenRingBossesComponent, EldenRingBossesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  bootstrap: [EldenRingBossesComponent],
})
export class EldenRingBossesModule { }
