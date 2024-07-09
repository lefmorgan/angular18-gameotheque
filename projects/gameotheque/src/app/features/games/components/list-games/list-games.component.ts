import { Component, inject, signal } from '@angular/core';
import { TableGamesComponent } from '../table-games/table-games.component';
import { VideoGame } from '../../models/video-game';
import { CreateVideoGamesComponent } from '../create-video-games/create-video-games.component';
import { GetAllVideoGamesService } from '../../services/get-all-video-games.service';
import { MainFiltersComponent } from '../main-filters/main-filters.component';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [AsyncPipe ,TableGamesComponent, CreateVideoGamesComponent, MainFiltersComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent {
  private readonly service = inject(GetAllVideoGamesService);
  videoGame$ = this.service.getAll();
  videoGames$$ = toSignal(this.videoGame$)
  // videoGameList: VideoGame[] = [S
  //   { dateSortie: new Date(),
  //     nom: 'Final fantasy'
  //   },
  //   { dateSortie: new Date(),
  //     nom: 'Abe'
  //   },
  //   { dateSortie: new Date(),
  //     nom: 'Raise of Tomb raider'
  //   }
  // ];
  readyToCreate = signal<boolean>(false);

  prepCreation(): void {
    this.readyToCreate.set(true)
  }
}
