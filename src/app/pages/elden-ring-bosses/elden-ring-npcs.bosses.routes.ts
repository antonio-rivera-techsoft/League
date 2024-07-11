import { Routes } from '@angular/router';
import { EldenRingBossesComponent } from './elden-ring-bosses.component';
import { EldenRingBossesListComponent } from './elden-ring-bosses-list/elden-ring-bosses-list.component';

export const routes: Routes = [
    {
        path: '',
        component: EldenRingBossesComponent,
        children: [
            {
                path: '',
                redirectTo: 'bosses-list',
                pathMatch: 'full'
            },
            {
                path: 'bosses-list',
                component: EldenRingBossesListComponent
            }
        ]
    }
];
