import {Component, HostListener, inject, OnInit} from '@angular/core';
import {NavigationService} from '../../../../core/services/navigation.service';
import {NavItem} from '../../../../core/models/navigation.interface';
import {HttpClient} from '@angular/common/http';
import {IResponseSuccess} from '../../../../core/models/responses.interface';

import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive,
  ],
  providers: [NavigationService, HttpClient],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  //menuItems: NavItem[] = [];
  IsLogged: any;
  isMobile: boolean = false;
  navigationService = inject(NavigationService);
  menuItems: NavItem[] = [
    {
      "label": "Home",
      "url": "/home",
      "items": []
    },
    {
      "label": "u00bfQuiu00e9nes Somos?",
      "url": "/quienes-somos",
      "items": []
    },
    {
      "label": "Proyectos Culturales",
      "url": "#",
      "items": [
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
        },
        {
          "label": "Gobernaciu00f3n del Magdalena",
          "url": "#",
          "items": [
            {
              "label": "2020",
              "url": "#",
              "items": [
                {
                  "label": "Formar para Danzar en el Pau00eds del Pocabuy",
                  "url": "/proyectos-culturales/gobernacion-magdalena/2022/formar-para-danzar",
                  "items": []
                },
                {
                  "label": "Cartilla Virtual",
                  "url": "https://www.calameo.com/read/006464616e1d236399058",
                  "target": "_blank",
                  "items": []
                }
              ]
            },
            {
              "label": "2023",
              "url": "#",
              "items": [
                {
                  "label": "Talleres de Danza Conservemos la Tradiciu00f3n y el Patrimonio",
                  "url": "/proyectos-culturales/gobernacion-magdalena/2023/talleres-de-danza",
                  "items": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "label": "Galeria",
      "url": "/galeria",
      "items": []
    },
    {
      "label": "Academia",
      "url": "/academia",
      "items": []
    },
    {
      "label": "Ayuda Espiritual",
      "url": "#",
      "items": [
        {
          "label": "Reflexiones",
          "url": "/reflexiones",
          "items": []
        },
        {
          "label": "Oraciones",
          "url": "/oraciones",
          "items": []
        },
        {
          "label": "Santo Rosario",
          "url": "/santo-rosario",
          "items": []
        }
      ]
    },
    {
      "label": "Donaciu00f3n",
      "url": "/donacion",
      "items": []
    },
    {
      "label": "Contacto",
      "url": "/contacto",
      "items": []
    }
  ];

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
