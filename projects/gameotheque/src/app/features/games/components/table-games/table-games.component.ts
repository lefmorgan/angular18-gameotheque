import { Component, input, output } from '@angular/core';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'app-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.scss'
})
export class TableGamesComponent {
  items = input.required<VideoGame[]>();
  toCreate = output<void>();
  title = input<string>('');

  addVideoGame() : void {
     this.toCreate.emit();
  }
}
