import {Component} from '@angular/core';

@Component({
  selector: 'app-social-object-action-lines',
  imports: [],
  templateUrl: './social-object-action-lines.component.html',
  styleUrl: './social-object-action-lines.component.css'
})
export class SocialObjectActionLinesComponent {
  socialObjectives = [
    {
      title: 'Proyectos Sociales Integrales',
      description: 'Enfocados en familias vulnerables, niños, tercera edad y personas con discapacidad.',
      icon: 'bi bi-heart-fill'
    },
    {
      title: 'Ayudas Fundamentales',
      description: 'Suministro de alimentación, salud, educación y vivienda digna.',
      icon: 'bi bi-house-heart-fill'
    },
    {
      title: 'Capacitación Emprendedora',
      description: 'Formación para padres cabeza de hogar en creación de microempresas.',
      icon: 'bi bi-people-fill'
    },
    {
      title: 'Desarrollo de Talentos',
      description: 'Apoyo a talentos artísticos, deportivos y culturales de niños y jóvenes.',
      icon: 'bi bi-star-fill'
    },
    {
      title: 'Proyectos Ambientales',
      description: 'Iniciativas para mejorar condiciones de vida en comunidades vulnerables.',
      icon: 'bi bi-tree-fill'
    },
    {
      title: 'Apoyo Integral',
      description: 'Orientación espiritual y profesional para personas emocionalmente afectadas.',
      icon: 'bi bi-clipboard-heart-fill'
    }
  ];

  actionLines = [
    {
      title: 'Formación Profesional',
      description: 'Capacitación técnica en modistería, agricultura, pesca y artesanía.',
      icon: 'bi bi-book-half'
    },
    {
      title: 'Donaciones Solidarias',
      description: 'Entrega de alimentos, útiles escolares y recursos básicos.',
      icon: 'bi bi-gift-fill'
    },
    {
      title: 'Desarrollo Cultural',
      description: 'Promoción de actividades recreativas y culturales para comunidades.',
      icon: 'bi bi-palette-fill'
    }
  ];

}
