import {Component, HostListener, inject, OnInit} from '@angular/core';
import {NavigationService} from '../../../../core/services/navigation.service';
import {NavItem} from '../../../../core/models/navigation.interface';
import {HttpClient} from '@angular/common/http';
import {IResponseSuccess} from '../../../../core/models/responses.interface';

import {RouterLink} from '@angular/router';
import {NgClass, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass,
    NgTemplateOutlet
  ],
  providers: [NavigationService, HttpClient],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  menuItems: NavItem[] = [];
  IsLogged: any;
  isMobile: boolean = false;
  navigationService = inject(NavigationService);

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.navigationService.getMenu().subscribe({
      next: (response: IResponseSuccess<NavItem[]>) => {
        // Asignar los datos del menú a la variable del componente
        this.menuItems = response.data || []; // Usamos el primer nivel del array 'data[0]'
      },
      error: (error) => {
        console.error('Error al recibir el menú', error);
        this.menuItems = [];
      }
    });
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (typeof window !== 'undefined') { // Verifica si 'window' está disponible
      this.isMobile = window.innerWidth <= 768;
      if (this.isMobile) {
        this.closeAllDropdowns();
      }
    }
  }

  toggleDropdown(event: Event, level: number = 0): void {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const parentLi = target.closest('li');

    if (!parentLi) return;

    // Remover cualquier estado de hover previo
    this.clearHoverStates();

    const dropdown = parentLi.querySelector('.dropdown-menu') as HTMLElement;

    if (dropdown) {
      // Si estamos en móvil, manejamos diferente el comportamiento
      if (this.isMobile) {
        dropdown.classList.toggle('show');
        target.classList.toggle('active');
      } else {
        // En desktop, cerramos los submenús del mismo nivel
        const currentLevel = parentLi.closest(`ul`);
        if (currentLevel) {
          const siblingDropdowns = currentLevel.querySelectorAll('.dropdown-menu.show');
          siblingDropdowns.forEach(menu => {
            if (menu !== dropdown) {
              menu.classList.remove('show');
              const parentToggle = menu.parentElement?.querySelector('.dropdown-toggle');
              if (parentToggle) {
                parentToggle.classList.remove('active');
              }
            }
          });
        }

        dropdown.classList.toggle('show');
        target.classList.toggle('active');
      }
    }
  }

  private clearHoverStates(): void {
    // Remover estados de hover previos
    document.querySelectorAll('.hover-active').forEach(element => {
      element.classList.remove('hover-active');
    });
  }

  private closeAllDropdowns(): void {
    document.querySelectorAll('.dropdown-menu.show').forEach(dropdown => {
      dropdown.classList.remove('show');
    });

    document.querySelectorAll('.dropdown-toggle.active').forEach(toggle => {
      toggle.classList.remove('active');
    });
  }

  // Método para cerrar al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeAllDropdowns();
    }
  }

}
