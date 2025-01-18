import { Injectable } from '@angular/core';
import {ToastComponent} from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastComponent!: ToastComponent;

  register(toastComponent: ToastComponent): void {
    this.toastComponent = toastComponent;
  }

  success(message: string, duration: number = 5000): void {
    this.toastComponent?.show(message, 'success', duration);
  }

  error(message: string, duration: number = 5000): void {
    this.toastComponent?.show(message, 'error', duration);
  }

  info(message: string, duration: number = 5000): void {
    this.toastComponent?.show(message, 'info', duration);
  }
}
