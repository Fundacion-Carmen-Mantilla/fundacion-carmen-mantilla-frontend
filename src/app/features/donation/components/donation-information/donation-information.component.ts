import {Component} from '@angular/core';

@Component({
  selector: 'app-donation-information',
  imports: [],
  templateUrl: './donation-information.component.html',
  styleUrl: './donation-information.component.css'
})
export class DonationInformationComponent {

  donationOptions = [
    {
      icon: 'bi-heart-fill',
      title: 'Ayuda Alimentaria',
      description: 'Proporciona alimentos básicos a familias en vulnerabilidad extrema.',
      buttonText: 'Donar Alimentos',
      impact: 'Un paquete alimenticio puede sostener a una familia por una semana.'
    },
    {
      icon: 'bi-book-half',
      title: 'Apoyo Educativo',
      description: 'Contribuye a la educación de niños y jóvenes de comunidades vulnerables.',
      buttonText: 'Donar Útiles',
      impact: 'Un kit escolar puede transformar las oportunidades de un estudiante.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Microemprendimiento',
      description: 'Apoya la capacitación y desarrollo de madres y padres cabeza de hogar.',
      buttonText: 'Impulsar Emprendimiento',
      impact: 'Una capacitación puede generar ingresos sostenibles para una familia.'
    },
    {
      icon: 'bi-globe-americas',
      title: 'Proyectos Comunitarios',
      description: 'Contribuye al desarrollo integral de comunidades marginadas.',
      buttonText: 'Conocer Proyectos',
      impact: 'Un proyecto comunitario puede beneficiar a más de 200 personas.'
    },
    {
      icon: 'bi-palette',
      title: 'Desarrollo Cultural',
      description: 'Apoya el desarrollo de talentos artísticos y deportivos en jóvenes.',
      buttonText: 'Fomentar Talentos',
      impact: 'Cada apoyo cultural abre nuevas oportunidades para la juventud.'
    },
    {
      icon: 'bi-box2-heart-fill',
      title: 'Donación Integral',
      description: 'Contribución flexible para múltiples líneas de acción social.',
      buttonText: 'Donar Ahora',
      impact: 'Tu donación impacta directamente en la transformación de vidas.'
    }
  ];

  motivationalCards = [
    {
      icon: 'bi-bullseye',
      title: 'Impacto Social',
      description: 'Comprometidos con los Objetivos de Desarrollo Sostenible.',
      stats: '+10 Proyectos Anuales'
    },
    {
      icon: 'bi-award',
      title: 'Compromiso Transparente',
      description: 'Gestión ética y transparente de recursos desde 2011.',
      stats: '12 Años de Servicio'
    },
    {
      icon: 'bi-heart',
      title: 'Valores Fundamentales',
      description: 'Guiados por amor, compromiso y solidaridad.',
      stats: '20+ Valores Corporativos'
    }
  ];

}
