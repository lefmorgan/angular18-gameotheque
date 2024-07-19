import { Component } from '@angular/core';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../models/video-game';


@Component({
  selector: 'app-create-video-games',
  standalone: true,
  imports: [FormVideoGameComponent],
  templateUrl: './create-video-games.component.html',
  styleUrl: './create-video-games.component.scss'
})
export class CreateVideoGamesComponent {
  saveOne(item: VideoGame): void {
    console.info('Je save', item)
  }
}
