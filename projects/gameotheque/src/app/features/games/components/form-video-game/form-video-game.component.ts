import { Component, output, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter'
import 'moment/locale/fr';
import { VideoGame } from '../../models/video-game';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-video-game',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.scss',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    provideMomentDateAdapter()
  ],
})
export class FormVideoGameComponent {
 inputIcon = signal('sentiment_very_satisfied')

 saveItem = output<VideoGame>()
 item: VideoGame = {nom: '', releaseDate: new Date()}

 submitToSave(): void {
  this.saveItem.emit(this.item)
 }
}
