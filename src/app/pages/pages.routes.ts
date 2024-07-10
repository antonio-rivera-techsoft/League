import { EldenRingBossesModule } from './elden-ring-bosses/elden-ring-bosses.module';
import { EldenRingNpcsModule } from './elden-ring-npcs/elden-ring-npcs.module';
import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./champions/champions.module').then(m => m.ChampionsModule)
            },
            {
              path: 'npcs',
              loadChildren: () => import('./elden-ring-npcs/elden-ring-npcs.module').then(m => m.EldenRingNpcsModule)
            },
            {
              path: 'bosses',
              loadChildren: () => import('./elden-ring-bosses/elden-ring-bosses.module').then(m => m.EldenRingBossesModule)
            }
        ]
    }
];
