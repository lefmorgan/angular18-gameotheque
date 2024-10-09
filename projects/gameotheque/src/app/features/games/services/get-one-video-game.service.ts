import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { VideoGame } from "../models/video-game";
import { delay, Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({ 
    providedIn: 'root',
    useValue: {
        getOne(id: number): Observable<VideoGame> {
            return of({ releaseDate: new Date(2023, 1, 1), label: 'Abe', console: { label: 'Nintendo Switch', version: 'Oled' } },
        ).pipe(delay(1500));
        }
    }
})


export class GetOneVideoGameService {
    private readonly http = inject(HttpClient);

    
    getOne(id: number): Observable<VideoGame> {
     return this.http.get<VideoGame>(`${environment.apis.videoGame}/${id}`);
    }
}