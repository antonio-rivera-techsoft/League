import { Routes } from '@angular/router';
import { EldenRingNpcsComponent } from './elden-ring-npcs.component';
import { EldenRingNpcsListComponent } from './elden-ring-npcs-list/elden-ring-npcs-list.component';

export const routes: Routes = [
    {
        path: '',
        component: EldenRingNpcsComponent,
        children: [
            {
                path: '',
                redirectTo: 'npcs-list',
                pathMatch: 'full'
            },
            {
                path: 'npcs-list',
                component: EldenRingNpcsListComponent
            }
        ]
    }
];
