import {Component} from '@angular/core';


@Component({
  selector: 'app-values-and-policies',
  imports: [],
  templateUrl: './values-and-policies.component.html',
  styleUrl: './values-and-policies.component.css'
})
export class ValuesAndPoliciesComponent {
  valueGroups = [
    {
      icon: 'bi-heart-pulse',
      color: 'text-danger',
      title: 'Valores Humanos y Éticos',
      description: 'Principios fundamentales que nos definen',
      values: [
        'Amor',
        'Respeto',
        'Honestidad',
        'Integridad',
        'Humildad',
        'Ética',
        'Compromiso',
        'Responsabilidad',
        'Amabilidad',
        'Empatía',
        'Sensibilidad',
        'Calidad Humana'
      ]
    },
    {
      icon: 'bi-shield-check',
      color: 'text-primary',
      title: 'Valores Sociales y Comunitarios',
      description: 'Nuestro impacto y conexión con la comunidad',
      values: [
        'Solidaridad',
        'Espíritu Comunitario',
        'Equidad e Igualdad',
        'Servicio',
        'Actitud de Servicio',
        'Confianza',
        'Paz',
        'Sentido de Pertenencia'
      ]
    },
    {
      icon: 'bi-rocket-takeoff',
      color: 'text-success',
      title: 'Valores Organizacionales y de Desarrollo',
      description: 'Nuestra visión de crecimiento y excelencia',
      values: [
        'Innovación',
        'Trabajo en Equipo',
        'Eficiencia',
        'Optimismo',
        'Paciencia',
        'Calidad',
        'Mejora Continua',
        'Adaptabilidad'
      ]
    }
  ];

}
