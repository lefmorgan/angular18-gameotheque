import { Component } from '@angular/core';
import { FormGameConsoleComponent } from '../form-game-console/form-game-console.component';

@Component({
  selector: 'app-add-game-console',
  standalone: true,
  imports: [FormGameConsoleComponent],
  templateUrl: './add-game-console.component.html',
  styleUrl: './add-game-console.component.scss'
})
export class AddGameConsoleComponent {

}
