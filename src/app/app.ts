import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly formBuilder = inject(FormBuilder);

  protected nameForm: FormGroup = this.formBuilder.group({
    name: [''],
    surname: ['']
  });
  protected colorForm: FormGroup = this.formBuilder.group({
    colorName: [''],
    hex: ['']
  });

  protected submit01(): void {
    alert(`
      Resultado del primer formulario:
      ${this.nameForm.value.name} ${this.nameForm.value.surname}
      `);
  }

  protected submit02(): void {
    alert(`
      Resultado del segundo formulario:
      ${this.colorForm.value.colorName}: ${this.colorForm.value.hex}
      `)
  }
}
