import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../shared/features/services/api.service';
import {NavItem} from '../models/navigation.interface';
import {IResponseSuccess} from '../models/responses.interface';

@Injectable({providedIn: 'root'})
export class NavigationService {
  // Ejemplo de rutas estáticas (pueden ser dinámicas desde un backend)
  api: ApiService = inject(ApiService);

  getMenu() {
    return this.api.get<IResponseSuccess<NavItem[]>>('menu/get-menu', null, true);
  }
}
