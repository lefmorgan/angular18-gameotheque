import { Component, inject, signal, ViewEncapsulation} from '@angular/core';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../models/video-game';
import { SaveOneVideoGameService } from '../../services/save-one-video-game.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { StatePanel } from '../../../../core/custom-types';

@Component({
  selector: 'app-create-video-games',
  standalone: true,
  imports: [FormVideoGameComponent, MatProgressSpinnerModule],
  templateUrl: './create-video-games.component.html',
  styleUrl: './create-video-games.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreateVideoGamesComponent {
  private readonly service = inject(SaveOneVideoGameService);
  private readonly snackbar = inject(MatSnackBar);
  isSaving = signal(false);
  newItem: VideoGame = {console: {label: '', version: '', id: 1 }, label: '', releaseDate: new Date}

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', {duration: 3000, panelClass: [cssClass]  });
  }
  saveOne(item: VideoGame): void {
    this.isSaving.set(true);
    this.service.save(item).subscribe({
      next: savedVideoGame => {
        this.openSnack(`Video Game saved`, 'success');
        this.isSaving.set(false)
      },
      error: error => {
        this.openSnack('Error saving video game', 'failed');
        this.isSaving.set(false)
      }
    })
  }
}
