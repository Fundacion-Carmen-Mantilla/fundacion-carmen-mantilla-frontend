import {Component} from '@angular/core';

@Component({
  selector: 'app-our-mission-home',
  imports: [],
  templateUrl: './our-mission-home.component.html',
  styleUrl: './our-mission-home.component.css'
})
export class OurMissionHomeComponent {
  missions = [
    {
      title: 'Educación para Crecer',
      description: 'Llevamos conocimiento y oportunidades a quienes más lo necesitan, garantizando acceso a una educación inclusiva que transforma vidas y familias.',
      icon: 'bi bi-book'
    },
    {
      title: 'Cultura para la Paz',
      description: 'A través de nuestro grupo artístico FUNCAM y la academia cultural, enseñamos danzas tradicionales y valores que unen generaciones.',
      icon: 'bi bi-heart'
    },
    {
      title: 'Apoyo Integral',
      description: 'Nos enfocamos en mejorar la calidad de vida con proyectos de alimentación, capacitación y emprendimiento para las familias más necesitadas.',
      icon: 'bi bi-people'
    },
    {
      title: 'Ayuda Humanitaria',
      description: 'Proveemos alimento, vivienda, utensilios escolares, recreación y orientación a quienes enfrentan situaciones críticas.',
      icon: 'bi bi-shield-check'
    },
    {
      title: 'Inclusión con Equidad',
      description: 'Construimos espacios seguros de participación, reduciendo la exclusión social y generando oportunidades para todos.',
      icon: 'bi bi-umbrella'
    },
    {
      title: 'Valores y Espiritualidad',
      description: 'Fomentamos valores éticos, morales y espirituales, construyendo una sociedad reconciliada, solidaria y cargada de esperanza.',
      icon: 'bi bi-lightbulb'
    }
  ];

}
