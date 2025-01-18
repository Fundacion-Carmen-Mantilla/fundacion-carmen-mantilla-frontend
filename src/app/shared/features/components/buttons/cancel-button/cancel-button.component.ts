import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  imports: [],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.css'
})
export class CancelButtonComponent {
  @Input() label: string = 'Cancelar'; // Texto personalizable
}
