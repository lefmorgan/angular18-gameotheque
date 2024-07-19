import { Routes } from '@angular/router';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { CreateVideoGamesComponent } from './components/create-video-games/create-video-games.component';

export const videoGamesRoutes: Routes = [
  {
    path: '',
    component: ListGamesComponent,
  },
  {
    path: 'create',
    component: CreateVideoGamesComponent,
  }
];
