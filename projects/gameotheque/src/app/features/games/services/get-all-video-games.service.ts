import { HttpClient } from '@angular/common/http';
import { Injectable, inject, isDevMode } from '@angular/core';
import { VideoGames } from '../models/video-game';
import { Observable, retry } from 'rxjs';
import { GetAll } from '../../../core/custom-types';
import { fakeInMemoryGetAllVideoGamesService } from './fakes';
import { environment } from '../../../../environments/environment.development';

export interface GetAllGames extends GetAll<VideoGames> {
  getAll(): Observable<VideoGames>;
}
@Injectable({
  providedIn: 'root',
  // useValue: fakeInMemoryGetAllVideoGamesService
//   useFactory: () =>
//     !isDevMode()
//       ? new GetAllVideoGamesService()
//       : fakeInMemoryGetAllVideoGamesService,
 })
export class GetAllVideoGamesService implements GetAllGames {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<VideoGames> {
    return this.httpClient.get<VideoGames>(environment.apis.videoGame).pipe(
      retry(2)
    );
  }
}
