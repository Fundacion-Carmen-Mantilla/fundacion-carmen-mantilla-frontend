import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-founder',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-founder.component.html',
  styleUrl: './about-founder.component.css'
})
export class AboutFounderComponent {
  foundationDetails = {
    legalNature: {
      title: 'Naturaleza Jurídica',
      description: 'Persona jurídica de derecho privado, sin ánimo de lucro, de desarrollo social, con acceso a toda la comunidad.',
      icon: 'bi-shield-fill-check',
      details: [
        {
          title: 'Constitución Legal',
          content: 'Fundada legalmente el 15 de abril de 2011, surge de la iniciativa privada para ampliar el apoyo a personas vulnerables.',
          icon: 'bi-calendar-check'
        },
        {
          title: 'Origen y Motivación',
          content: 'Nace de la necesidad de continuar la labor social de Carmen Mantilla Morales, expandiendo el alcance de la ayuda comunitaria.',
          icon: 'bi-heart-fill'
        },
        {
          title: 'Gestión de Recursos',
          content: 'Conformada por un grupo de personas altruistas que gestionan recursos ante organizaciones nacionales e internacionales, públicas y privadas.',
          icon: 'bi-cash-stack'
        },
        {
          title: 'Modelo Organizativo',
          content: 'Estructura basada en la transparencia, compromiso social y gestión eficiente de recursos para el desarrollo de programas sociales.',
          icon: 'bi-diagram-3'
        }
      ],
      additionalInfo: {
        resourceManagement: [
          'Captación de recursos de entidades públicas',
          'Colaboración con organizaciones internacionales',
          'Alianzas con sector privado',
          'Donaciones y voluntariado'
        ],
        principalValues: [
          'Transparencia',
          'Compromiso social',
          'Solidaridad',
          'Desarrollo comunitario'
        ]
      }
    },

    foundation: {
      name: 'FUNDACIÓN CARMEN MANTILLA',
      foundationDate: '15 de abril de 2011',
      origin: 'Surge por iniciativa privada para ampliar la ayuda a personas vulnerables, continuando el legado de Carmen Mantilla Morales.'
    },
    mission: {
      title: 'Misión Institucional',
      description: 'Gestionar recursos ante organizaciones nacionales e internacionales para implementar proyectos sociales integrales que mejoren la calidad de vida de comunidades vulnerables.',
      icon: 'bi-bullseye'
    },
    beneficiaries: {
      primary: [
        'Niños',
        'Niñas',
        'Adolescentes',
        'Jóvenes'
      ],
      secondary: [
        'Madres cabeza de hogar',
        'Tercera edad',
        'Personas con discapacidad',
        'Víctimas del conflicto',
        'Comunidades afrodescendientes'
      ],
      icon: 'bi-people-fill'
    },
    socialFocus: {
      title: 'Enfoques de Intervención',
      areas: [
        'Proyectos sociales',
        'Proyectos culturales',
        'Proyectos ambientales',
        'Proyectos microempresariales',
        'Proyectos de salud',
        'Proyectos educativos',
        'Orientación espiritual'
      ],
      icon: 'bi-diagram-3-fill'
    },
    objectives: {
      title: 'Objetivos Fundamentales',
      goals: [
        'Garantizar el cumplimiento de los Objetivos de Desarrollo Sostenible (ODS)',
        'Mejorar condiciones de vida e ingresos de familias vulnerables',
        'Generar ciudadanos con valores éticos, morales y espirituales',
        'Promover un ambiente de fe, paz, reconciliación, alegría y esperanza'
      ],
      icon: 'bi-flag-fill'
    }
  };

}
