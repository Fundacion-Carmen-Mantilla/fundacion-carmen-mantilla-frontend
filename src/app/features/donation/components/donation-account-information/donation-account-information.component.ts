import {Component} from '@angular/core';

@Component({
  selector: 'app-donation-account-information',
  imports: [],
  templateUrl: './donation-account-information.component.html',
  styleUrl: './donation-account-information.component.css'
})
export class DonationAccountInformationComponent {

  bankDetails = {
    bank: 'Banco de Bogotá',
    accountNumber: '284-22386-4',
    contactEmail: 'funcarmenmantilla@hotmail.com'
  };

  buttonTextAccount = 'Copiar';
  buttonTextEmail = 'Copiar';

  copyToClipboardAccount(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.buttonTextAccount = 'Copiado';

      setTimeout(() => {
        this.buttonTextAccount = 'Copiar';
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

  copyToClipboardEmail(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.buttonTextEmail = 'Copiado';

      // Desactivar el tooltip después de 2 segundos
      setTimeout(() => {
        this.buttonTextEmail = 'Copiar';
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }



}
