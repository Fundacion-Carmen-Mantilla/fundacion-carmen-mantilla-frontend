import {Routes} from '@angular/router';
import {HomePageComponent} from './features/home/pages/home-page/home-page.component';
import {AboutUsComponent} from './features/about-us/pages/about-us/about-us.component';
import {LoginPageComponent} from './features/auth/pages/login-page/login-page.component';
import {ContactPageComponent} from './features/contact/pages/contact-page/contact-page.component';
import {DonationPageComponent} from './features/donation/pages/donation-page/donation-page.component';

export const routes: Routes = [
  {
    path: '', // Ruta raíz para Home
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home', // Ruta para Home
    title: 'Fundación Carmen Mantilla - Inicio',
    component: HomePageComponent
  },
  {
    path: 'about-us', // Ruta para Nosotros
    title: 'Fundación Carmen Mantilla - Sobre Nosotros',
    component: AboutUsComponent
  },
  {
    path: 'auth/portal/login',
    title: 'Fundación Carmen Mantilla - Iniciar Sesión',
    component: LoginPageComponent
  },
  {
    path: 'contacto',
    title: 'Fundación Carmen Mantilla - Contacto',
    component: ContactPageComponent
  },
  {
    path: 'donation',
    title: 'Fundación Carmen Mantilla - Donación',
    component: DonationPageComponent
  }
];
