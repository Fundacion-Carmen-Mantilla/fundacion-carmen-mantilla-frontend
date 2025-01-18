
/**
 * Relaciona los datos recibidos del backend con la estructura esperada de MenuItem (PrimeNG).
 * Esto se adapta a las claves del backend.
 */
export interface NavItem {
  label: string; // Etiqueta que muestra el menú
  url: string; // Ruta o URL que debe apuntar el enlace
  items?: NavItem[]; // Submenús (opcional)
  target?: string; // Enlaces externos (opcional)
}

export interface PrimeMenuItem {
  routerLink?: string | any[]; // Enlace interno
  items?: PrimeMenuItem[]; // Submenús adaptados al formato de PrimeNG
}
