import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { tap } from 'rxjs';

@Component({
  selector: 'app-form-game-console',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-game-console.component.html',
  styleUrl: './form-game-console.component.scss'
})
export class FormGameConsoleComponent implements OnInit  {
  private readonly formBuilder = inject(FormBuilder)

  // gameConsoleForm = this.formBuilder.group<GameConsole>({
  //   label: ['', Validators.required],
  //   version: ['', Validators.required]
  // })

  gameConsoleForm = this.formBuilder.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    version: ['', Validators.required]
  })

  private fromDetecChanges$ = this.gameConsoleForm.valueChanges.pipe(
    tap( item => console.log('Form value changes:', item)  ),
  );

  ngOnInit(): void {
      this.fromDetecChanges$.subscribe()
  }


  submitToSave(): void {
    var result = this.gameConsoleForm.value
    console.log(result)
  }
}
