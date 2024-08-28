import { Injectable } from "@angular/core";
import { GameConsoles } from "../models/game-console";
import { delay, Observable, of } from "rxjs";
import { GetAll } from "../../../core/custom-types";

export interface GetAllGamesConsoles extends GetAll<GameConsoles> {
    getAll(): Observable<GameConsoles>;
}
@Injectable({providedIn: 'root'})
export class GetAllGameConsoleService implements GetAllGamesConsoles{
    getAll(): Observable<GameConsoles> {
        const array: GameConsoles = [
            {id: 1, label: 'Nintendo Switch' },
            {id: 2, label: 'PS5'},
            {id: 3, label: 'Xbox Series X'},
        ]
        return of(array).pipe(delay(1000))
    }
}