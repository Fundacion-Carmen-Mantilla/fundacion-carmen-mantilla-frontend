import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DynamicFormField} from '../../../../../core/models/dynamic-form.interface';
import {NgClass, NgStyle} from '@angular/common';
import {InsertButtonComponent} from '../../buttons/insert-button/insert-button.component';
import {LoadingService} from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    ReactiveFormsModule,
    NgStyle,
    InsertButtonComponent,
    NgClass
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: DynamicFormField[] = []; // Tipar los campos con la interfaz
  @Output() formSubmit = new EventEmitter<Record<string, any>>(); // Enviar los valores del formulario
  @Input() title: string = 'Formulario Dinámico';
  @Input() isLoading = inject(LoadingService); // Obtener el estado de carga
  @Input() buttonText: string = 'Guardar'; // Definir el texto del botón
  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({});

  constructor() {
  }

  ngOnInit(): void {
    this.fields.forEach((field) => {
      const control = new FormControl(
        field.value || '',
        field.required ? Validators.required : []
      );
      this.form.addControl(field.name, control);
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading.startLoading();
      this.formSubmit.emit(this.form.value);
    }
  }
}
