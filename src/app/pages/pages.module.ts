import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { ShellComponent } from './shell/shell.component';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [PagesComponent,ShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    // toolbarComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
