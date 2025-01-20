import { Component } from '@angular/core';
import {HeroDonationComponent} from '../../components/hero-donation/hero-donation.component';
import {DonationInformationComponent} from '../../components/donation-information/donation-information.component';
import {
  DonationAccountInformationComponent
} from '../../components/donation-account-information/donation-account-information.component';

@Component({
  selector: 'app-donation-page',
  imports: [
    HeroDonationComponent,
    DonationInformationComponent,
    DonationAccountInformationComponent
  ],
  templateUrl: './donation-page.component.html',
  styleUrl: './donation-page.component.css'
})
export class DonationPageComponent {

}
