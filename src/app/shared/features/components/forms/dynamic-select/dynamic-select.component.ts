import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dynamic-select',
  imports: [],
  templateUrl: './dynamic-select.component.html',
  styleUrl: './dynamic-select.component.css'
})
export class DynamicSelectComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() placeholder: string = 'Seleccionar...';
}
