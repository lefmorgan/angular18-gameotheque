import { Component } from '@angular/core';
import { TableGamesComponent } from '../table-games/table-games.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent {

}
