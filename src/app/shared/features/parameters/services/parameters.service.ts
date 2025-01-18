import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {catchError, map, Observable, of} from 'rxjs';
import {IGetParameterByCategoryAndType} from '../models/parameters.interface';
import {IResponseSuccess} from '../../../../core/models/responses.interface';
import {IResponseParametersGeneralSettings} from '../models/parameters.general.settings';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private apiService: ApiService) {
  }

  // Llama a la API para obtener parámetros del backend Laravel
  getParameters(endpoint: string, params: IGetParameterByCategoryAndType): Observable<IResponseSuccess> {
    return this.apiService.get<IResponseSuccess>(endpoint, params);
  }

  getGeneralSettingsParameter<T>(key: string): Observable<T | null> {
    return this.apiService.get<IResponseParametersGeneralSettings>('parameter/general-settings', null, true).pipe(
      map((response) => {
        const parameter = response.data.find((param) => param.key === key);
        return parameter ? (parameter.value as T) : null;
      }),
      catchError((error) => {
        console.error(`Error fetching parameter ${key}`, error);
        return of(null); // Devuelve null si ocurre un error
      })
    );
  }
}
