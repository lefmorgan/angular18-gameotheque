import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { videoGamesRoutes } from './features/games/video-games.routes';
import { gameConsolesRoutes } from './features/game-consoles/components/add-game-console/game-consoles.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'video-games',
    children: videoGamesRoutes
    //CloadChildren: () => import('./features/games/games.routes').then(item => item.gamesRoutes)
  },
  {
    path: 'game-consoles',
    children: gameConsolesRoutes
  }
];
