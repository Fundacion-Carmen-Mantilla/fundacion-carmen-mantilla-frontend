import {Component, HostListener, inject, OnInit} from '@angular/core';
import {NavigationService} from '../../../../core/services/navigation.service';
import {NavItem} from '../../../../core/models/navigation.interface';
import {HttpClient} from '@angular/common/http';

import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  providers: [NavigationService, HttpClient],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ministerioCulture: NavItem[] = [
    {
      "label": "Ministerio de Cultura",
      "url": "#",
      "items": [
        {
          "label": "2020",
          "url": "#",
          "items": [
            {
              "label": "#ComparteLoQueSomos",
              "url": "/proyectos-culturales/min-cultura/2020/comparte-lo-que-somos",
            }
          ]
        },
        {
          "label": "2021",
          "url": "#",
          "items": [
            {
              "label": "Aprendiendo y Danzando",
              "url": "/proyectos-culturales/min-cultura/2021/aprendiendo-y-danzando",
              "items": []
            },
            {
              "label": "Formados Danzamos Unidos",
              "url": "/proyectos-culturales/min-cultura/2021/formados-danzamos-unidos",
              "items": []
            }
          ]
        },
        {
          "label": "2022",
          "url": "#",
          "items": [
            {
              "label": "Aprendiendo, Danzando y Formados Seguimos Avanzando",
              "url": "/proyectos-culturales/min-cultura/2022/aprendiendo-danzando-y-formados",
              "items": []
            }
          ]
        },
        {
          "label": "2023",
          "url": "#",
          "items": [
            {
              "label": "Aprendiendo, Danzamos por la Vida al Ritmo de la Paz",
              "url": "/proyectos-culturales/min-cultura/2023/aprendiendo-danzamos-vida",
              "items": []
            }
          ]
        },
        {
          "label": "2024",
          "url": "#",
          "items": [
            {
              "label": "Aprendiendo, Conservamos el Patrimonio Cultural y Medioambiental",
              "url": "/proyectos-culturales/min-cultura/2024/aprendiendo-patrimonio-medioambiental",
              "items": []
            }
          ]
        }
      ]
    },
  ];

  gobernacionMagdalena: NavItem[] = [
    {
      "label": "Gobernacion del Magdalena",
      "url": "#",
      "items": [
        {
          "label": "2020",
          "url": "#",
          "items": [
            {
              "label": "Formar para Danzar en el Pais del Pocabuy",
              "url": "/proyectos-culturales/gobernacion-magdalena/2022/formar-para-danzar",
              "items": []
            }
          ]
        },
        {
          "label": "2023",
          "url": "#",
          "items": [
            {
              "label": "Talleres de Danza Conservemos la Tradicion y el Patrimonio",
              "url": "/proyectos-culturales/gobernacion-magdalena/2023/talleres-de-danza",
              "items": []
            }
          ]
        }
      ]
    }
  ];
  danzaParejas: NavItem[] = [
    {
      "label": "Danza por Parejas",
      "url": "#",
      "items": [
        {
          "label": "Informacion",
          "url": "/proyectos-culturales/danza-por-parejas/informacion",
          "items": []
        },
        {
          "label": "Galeria",
          "url": "/proyectos-culturales/danza-por-parejas/galeria",
          "items": []
        }
      ]
    }];

  constructor() {
  }

  ngOnInit(): void {

  }

}
