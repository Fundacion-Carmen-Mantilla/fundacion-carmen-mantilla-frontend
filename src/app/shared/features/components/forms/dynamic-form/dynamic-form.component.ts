import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {DynamicFormField} from '../../../../../core/models/dynamic-form.interface';
import {NgClass, NgStyle} from '@angular/common';
import {InsertButtonComponent} from '../../buttons/insert-button/insert-button.component';
import {LoadingService} from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    ReactiveFormsModule,
    InsertButtonComponent,
    NgClass
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: DynamicFormField[] = [];
  @Output() formSubmit = new EventEmitter<Record<string, any>>();
  @Input() title: string = 'Formulario Dinámico';
  @Input() isLoading = inject(LoadingService);
  @Input() buttonText: string = 'Guardar';

  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.fields.forEach((field) => {
      const validators = this.buildValidators(field);
      const control = new FormControl(field.value || '', validators);
      this.form.addControl(field.name, control);
    });
  }

  private buildValidators(field: DynamicFormField): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (field.required) {
      validators.push(Validators.required);
    }

    switch (field.type) {
      case 'email':
        validators.push(Validators.email);
        break;
      case 'number':
        if (field.min !== undefined) validators.push(Validators.min(field.min));
        if (field.max !== undefined) validators.push(Validators.max(field.max));
        break;
    }

    if (field.minLength) validators.push(Validators.minLength(field.minLength));
    if (field.maxLength) validators.push(Validators.maxLength(field.maxLength));
    if (field.pattern) validators.push(Validators.pattern(field.pattern));

    return validators;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  getErrorMessage(field: DynamicFormField): string {
    const control = this.form.get(field.name);
    if (!control || !control.errors) return field.errorMessage || 'Campo inválido';

    if (control.errors['required']) return 'Este campo es obligatorio';
    if (control.errors['email']) return 'Correo electrónico inválido';
    if (control.errors['minlength']) return `Mínimo ${field.minLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo ${field.maxLength} caracteres`;
    if (control.errors['min']) return `Valor mínimo ${field.min}`;
    if (control.errors['max']) return `Valor máximo ${field.max}`;
    if (control.errors['pattern']) return 'Formato inválido';

    return field.errorMessage || 'Campo inválido';
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading.startLoading();
      this.formSubmit.emit(this.form.value);
    }
  }

  resetForm(): void {
    this.form.reset();
    // Opcional: marcar el formulario como pristine y untouched
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }


  protected readonly RegExp = RegExp;
}
