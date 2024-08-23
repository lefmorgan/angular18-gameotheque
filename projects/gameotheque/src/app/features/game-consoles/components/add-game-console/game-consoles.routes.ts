import { Routes } from "@angular/router";
import { AddGameConsoleComponent } from "./add-game-console.component";

export const gameConsolesRoutes: Routes = [
    {
        path: 'create',
        component: AddGameConsoleComponent,
    }
]