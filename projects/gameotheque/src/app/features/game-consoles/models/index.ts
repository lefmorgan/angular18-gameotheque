export interface GameConsole {
    id ?: number;
    label: string;
    version: string;
}

export type GameConsoleType = GameConsole[];