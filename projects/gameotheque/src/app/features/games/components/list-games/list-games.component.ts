import { Component, inject, signal } from '@angular/core';
import { TableGamesComponent } from '../table-games/table-games.component';
import { VideoGame } from '../../models/video-game';
import { CreateVideoGamesComponent } from '../create-video-games/create-video-games.component';
import { GetAllVideoGamesService } from '../../services/get-all-video-games.service';
import { MainFiltersComponent } from '../main-filters/main-filters.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent, CreateVideoGamesComponent, MainFiltersComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent {
  private readonly service = inject(GetAllVideoGamesService);
  videoGameList!: VideoGame[];
  readyToCreate = signal<boolean>(false);

  prepCreation(): void {
    this.readyToCreate.set(true)
  }
}
