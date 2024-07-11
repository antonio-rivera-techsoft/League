import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EldenRingNpcsComponent } from './elden-ring-npcs.component';
import { EldenRingNpcsListComponent } from './elden-ring-npcs-list/elden-ring-npcs-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './elden-ring-npcs.routes';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [EldenRingNpcsComponent, EldenRingNpcsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  bootstrap: [EldenRingNpcsComponent],
  
})
export class EldenRingNpcsModule { }
