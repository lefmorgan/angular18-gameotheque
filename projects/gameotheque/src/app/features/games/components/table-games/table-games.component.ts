import { Component, inject, input, output } from '@angular/core';
import { VideoGame } from '../../models/video-game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.scss'
})
export class TableGamesComponent {
  private readonly router = inject(Router);
  items = input.required<VideoGame[]>();
  toCreate = output<void>();
  title = input<string>('');

  addVideoGame() : void {
     this.toCreate.emit();
  }

  goToEdit(id?: number): void {
    this.router.navigate(['video-games/edit', id]);
  }
}
