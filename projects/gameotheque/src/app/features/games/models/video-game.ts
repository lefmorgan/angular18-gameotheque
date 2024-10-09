import { GameConsole } from "../../game-consoles/models";

export interface VideoGame {
    id?: number;
    label: string;
    releaseDate: Date;
    console: GameConsole
}

export type VideoGames = VideoGame[];