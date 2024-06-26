import { Component, Input } from '@angular/core';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'app-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.scss'
})
export class TableGamesComponent {
  items = Input.required<VideoGame[]>
}
