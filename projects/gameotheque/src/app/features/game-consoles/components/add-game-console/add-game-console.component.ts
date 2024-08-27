import { Component, inject, signal } from '@angular/core';
import { FormGameConsoleComponent } from '../form-game-console/form-game-console.component';
import { GameConsole } from '../../models';
import { AddOneGameConsoleService } from '../../services/add-one-game-console.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StatePanel } from '../../../../core/custom-types';

@Component({
  selector: 'app-add-game-console',
  standalone: true,
  imports: [FormGameConsoleComponent, MatProgressSpinnerModule],
  templateUrl: './add-game-console.component.html',
  styleUrl: './add-game-console.component.scss'
})
export class AddGameConsoleComponent {
  private readonly business = inject(AddOneGameConsoleService)
  private readonly snackbar = inject(MatSnackBar);

  isSaving = signal(false)
  newItem: GameConsole = {label: '', version: '' };

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', {duration: 3000, panelClass: [cssClass]  });
  }
  
  createOne(item: GameConsole): void {
    this.isSaving.set(true)
    this.business.add(item).subscribe({
      next: item => {
        this.openSnack('Sauvegarde Réussi !' , 'success')
        this.isSaving.set(false)
        this.newItem = {label: '', version: '' } 
      },
      error: error => {
        this.openSnack('Erreur de sauvegarde!' , 'failed')
        this.isSaving.set(false)
      }
    });
  }
}
