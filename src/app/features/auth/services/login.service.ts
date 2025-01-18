import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../../shared/features/services/api.service';
import {ILoginRequest, LoginResponse} from '../models/login.interface';
import {IResponseSuccess} from '../../../core/models/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = '';

  apiServices: ApiService = inject(ApiService);

  login(body: ILoginRequest) {
    return this.apiServices.post<IResponseSuccess<LoginResponse>, ILoginRequest>('auth/login', body, true);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
