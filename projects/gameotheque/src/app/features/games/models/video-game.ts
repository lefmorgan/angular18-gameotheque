import { GameConsole } from "../../game-consoles/models";

export interface VideoGame {
    label: string;
    releaseDate: Date;
    console: GameConsole
}

export type VideoGames = VideoGame[];