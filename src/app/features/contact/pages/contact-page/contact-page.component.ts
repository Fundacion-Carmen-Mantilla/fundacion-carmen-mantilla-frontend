import {Component, inject} from '@angular/core';
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
  formFields: DynamicFormField[] = [
    {
      name: 'names',
      label: 'Nombres completos',
      type: 'text',
      required: true,
      errorMessage: 'Por favor, ingresa tus nombres completos.'
    },
    {
      name: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      required: true,
      errorMessage: 'Por favor, ingresa un correo electrónico válido.'
    },
    {
      name: 'subject',
      label: 'Asunto',
      type: 'text',
      required: true,
      errorMessage: 'Por favor, ingresa el asunto del mensaje.'
    },
    {
      name: 'message',
      label: 'Mensaje',
      type: 'textarea',
      required: true,
      errorMessage: 'El mensaje debe contener al menos 6 caracteres.'
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
      complete: () => {
        this.isLoading.stopLoading();
      }
    });
  }


}
