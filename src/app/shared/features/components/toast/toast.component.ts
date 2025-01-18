import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

interface Toast {
  type: 'success' | 'error' | 'info';
  message: string;
  visible: boolean;
  timestamp: Date; // Agregamos la marca de tiempo
}

@Component({
  selector: 'app-toast',
  imports: [
    NgClass
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private intervalId: any;

  constructor() {
  }

  ngOnInit(): void {
    // Configura un intervalo para actualizar la vista cada 30 segundos
    this.intervalId = setInterval(() => {
      this.toasts = [...this.toasts]; // Forzar detección de cambios
    }, 30000); // Opcional, ajusta el tiempo según lo necesites
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo al salir del componente
    }
  }

  show(message: string, type: 'success' | 'error' | 'info', duration = 5000): void {
    const toast = {type, message, visible: true, timestamp: new Date()};
    this.toasts.push(toast);

    if (duration > 0) {
      setTimeout(() => this.hide(toast), duration);
    }
  }

  hide(toast: Toast) {
    toast.visible = false; // Inicia la animación de desvanecimiento

    // Espera que termine la animación (0.8s) antes de eliminar el toast del array
    setTimeout(() => {
      const index = this.toasts.indexOf(toast);
      if (index > -1) {
        this.toasts.splice(index, 1); // Elimina el toast después de la animación
      }
    }, 800); // Tiempo en milisegundos debe coincidir con el de la animación (0.8s)
  }

  getToastClass(toast: Toast): string {
    switch (toast.type) {
      case 'success':
        return 'toast-success';
      case 'error':
        return 'toast-error';
      case 'info':
      default:
        return 'toast-info';
    }
  }

  getTitle(type: 'success' | 'error' | 'info'): string {
    switch (type) {
      case 'success':
        return '¡Hecho!';
      case 'error':
        return '¡Error!';
      case 'info':
      default:
        return 'Atención';
    }
  }

  getTimeAgo(toast: Toast): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - toast.timestamp.getTime()) / 1000);

    if (seconds < 60) {
      return 'Hace un momento';
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) {
      return 'Hace 1 minuto';
    }
    return `Hace ${minutes} minutos`;
  }
}
