import { Routes } from '@angular/router';
import { ChampionsComponent } from './champions.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ChampionsComponent,
        children: [
            {
                path: '',
                redirectTo: 'champions-list',
                pathMatch: 'full'
            },
            {
                path: 'champions-list',
                component: ChampionListComponent
            },
            {
                path: 'champions-details/:id',
                component: ChampionDetailComponent
            }
        ]
    }
];
