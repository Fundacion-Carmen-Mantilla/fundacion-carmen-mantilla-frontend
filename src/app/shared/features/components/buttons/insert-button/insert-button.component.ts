import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-insert-button',
  imports: [],
  templateUrl: './insert-button.component.html',
  styleUrl: './insert-button.component.css'
})
export class InsertButtonComponent {
  @Input() label: string = 'Guardar'; // Definir el texto del botón
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
}
