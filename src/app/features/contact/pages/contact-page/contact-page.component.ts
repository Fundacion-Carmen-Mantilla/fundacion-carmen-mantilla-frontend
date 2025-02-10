import {Component, inject, ViewChild} from '@angular/core';
import {DynamicFormField} from '../../../../core/models/dynamic-form.interface';
import {DynamicFormComponent} from '../../../../shared/features/components/forms/dynamic-form/dynamic-form.component';
import {LoadingService} from '../../../../core/services/loading.service';
import {MapaSecctionComponent} from '../../components/mapa-secction/mapa-secction.component';
import {InformationSectionComponent} from '../../components/information-section/information-section.component';
import {ContactService} from '../../services/contact.service';
import {ContactRequest} from '../../models/contact';
import {ToastService} from '../../../../shared/features/services/toast.service';

@Component({
  selector: 'app-contact-page',
  imports: [
    DynamicFormComponent,
    MapaSecctionComponent,
    InformationSectionComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  @ViewChild(DynamicFormComponent) dynamicFormComponent!: DynamicFormComponent;

  formFields: DynamicFormField[] = [
    {
      name: 'names',
      label: 'Nombres completos',
      type: 'text',
      required: true,
      placeholder: 'Ingresa tus nombres completos',
      minLength: 3,
      maxLength: 50,
      errorMessage: 'Nombres inválidos'
    },
    {
      name: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      required: true,
      placeholder: 'ejemplo@dominio.com',
      errorMessage: 'Correo electrónico inválido'
    },
    {
      name: 'subject',
      label: 'Asunto',
      type: 'text',
      required: true,
      placeholder: 'Motivo de tu contacto',
      minLength: 3,
      maxLength: 100,
      errorMessage: 'Asunto inválido'
    },
    {
      name: 'message',
      label: 'Mensaje',
      type: 'textarea',
      required: true,
      placeholder: 'Escribe tu mensaje aquí...',
      minLength: 10,
      maxLength: 500,
      errorMessage: 'Mensaje debe tener entre 10 y 500 caracteres'
    }
  ];


  isLoading: LoadingService = inject(LoadingService);
  contactService: ContactService = inject(ContactService);
  toastService: ToastService = inject(ToastService);

  /*
    * Función para enviar el formulario de contacto
    * @param formValues Valores del formulario
    * @returns void
   */
  onFormSubmit(formValues: Record<string, any>): void {
    const request = formValues as ContactRequest;
    this.contactService.contact(request).subscribe({
      next: (response) => {
        this.toastService.success(response.message);
      },
      error: (error) => {
        this.toastService.error('Error al enviar el formulario');
      },
      complete: () => {
        this.isLoading.stopLoading();
        this.dynamicFormComponent.resetForm();
      }
    });
  }


}
