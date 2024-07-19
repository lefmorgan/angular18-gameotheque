import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { videoGamesRoutes } from './features/games/video-games.routes';

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
  }
];
