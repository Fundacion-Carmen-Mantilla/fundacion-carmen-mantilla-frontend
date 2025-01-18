import {Component, inject, OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from '../../../../shared/features/components/forms/dynamic-form/dynamic-form.component';
import {DynamicFormField} from '../../../../core/models/dynamic-form.interface';
import {LoginService} from '../../services/login.service';
import {ILoginRequest} from '../../models/login.interface';
import {LoadingService} from '../../../../core/services/loading.service';
import {ToastService} from '../../../../shared/features/services/toast.service';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    DynamicFormComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formFields: DynamicFormField[] = [
    {
      name: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      required: true,
      errorMessage: 'El correo es obligatorio y debe tener un formato válido'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      required: true,
      errorMessage: 'La contraseña debe ser mayor a 6 caracteres'
    }
  ];
  isLoading = inject(LoadingService);
  loginService: LoginService = inject(LoginService);

  ngOnInit(): void {

  }

  handleSubmit(formData: Record<string, any>): void {
    // Convertir explícitamente al tipo ILoginRequest
    const loginRequest: ILoginRequest = {
      email: formData['email'],
      password: formData['password'],
    };

    // Usar el objeto correctamente tipado
    this.loginService.login(loginRequest).subscribe({
      next: (response) => {
        this.loginService.setToken(response.data.access_token);
      },
      complete: () => {
        this.isLoading.stopLoading()
      }
    });
  }
}
