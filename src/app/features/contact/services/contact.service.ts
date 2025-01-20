import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../../shared/features/services/api.service';
import {ContactRequest} from '../models/contact';
import {IResponseSuccess} from '../../../core/models/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiService: ApiService = inject(ApiService);

  contact(request: ContactRequest) {
    return this.apiService.post<IResponseSuccess, ContactRequest>('contact', request, true);
  }
}
