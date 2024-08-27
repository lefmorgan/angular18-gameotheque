import { Component, inject, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { tap } from 'rxjs';
import { GameConsole } from '../../models';

@Component({
  selector: 'app-form-game-console',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form-game-console.component.html',
  styleUrl: './form-game-console.component.scss',
})
export class FormGameConsoleComponent implements OnInit, OnChanges {
  private readonly formBuilder = inject(FormBuilder);
  toSave = output<GameConsole>();
  item = input.required<GameConsole>()
  // gameConsoleForm = this.formBuilder.group<GameConsole>({
  //   label: ['', Validators.required],
  //   version: ['', Validators.required]
  // })

  gameConsoleForm = this.formBuilder.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    version: ['', Validators.required],
  });

  private fromDetecChanges$ = this.gameConsoleForm.valueChanges.pipe(
    tap((item) => console.log('Form value changes:', item))
  );

  ngOnChanges(changes: SimpleChanges): void {
      const newItem = changes['item'].currentValue
      this.gameConsoleForm.setValue(newItem)
  }

  ngOnInit(): void {
   // this.fromDetecChanges$.subscribe();
  }

  submitToSave(): void {
    const result = this.gameConsoleForm.value;
    if (result.label && result.version) {
      result.label = result.label;
      this.toSave.emit(result as GameConsole); // warm: on ne controle pas le type de retour
    }
  }
}
