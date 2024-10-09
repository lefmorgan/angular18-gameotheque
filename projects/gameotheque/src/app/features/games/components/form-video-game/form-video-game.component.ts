import { Component, inject, input, OnChanges, output, signal, SimpleChanges } from '@angular/core';
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
import {MatSelectModule} from '@angular/material/select';
import { GetAllGameConsoleService } from '../../services/get-all-game-console.service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-form-video-game',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.scss',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    provideMomentDateAdapter()
  ],
})
export class FormVideoGameComponent implements OnChanges {
  private consoleService = inject(GetAllGameConsoleService)
 inputIcon = signal('sentiment_very_satisfied')

 saveItem = output<VideoGame>()
 //item: VideoGame = {label: '', releaseDate: new Date(), console: { label: 'Nintendo Switch', version: 'Base'  } }
 item = input.required<VideoGame>()
 consoles$$ = toSignal(this.consoleService.getAll())
 submitToSave(): void {
  console.log('Submit', this.item)
  this.saveItem.emit(this.item())
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.info(changes)
 }
}
