import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {skipAccessToken} from '../../../interceptors/http.context';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.baseUrl;// La URL base de tu backend Laravel
  http: HttpClient = inject(HttpClient);

  // GET genérico
  get<T>(endpoint: string, params?: any, skipToken: boolean = false): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {params, context: skipAccessToken(skipToken)});
  }

  // POST genérico

  /**
   * función para hacer peticiones POST
   * @param endpoint
   * @param body
   * @param skipToken
   */
  post<T, U>(endpoint: string, body: U, skipToken: boolean = false): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {context: skipAccessToken(skipToken)});
  }

  // PUT genérico
  put<T, U>(endpoint: string, body: U, skipToken: boolean = false): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {context: skipAccessToken(skipToken)});
  }

  // DELETE genérico
  delete<T, U>(endpoint: string, body: U, skipToken: boolean = false): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {body, context: skipAccessToken(skipToken)});
  }
}
