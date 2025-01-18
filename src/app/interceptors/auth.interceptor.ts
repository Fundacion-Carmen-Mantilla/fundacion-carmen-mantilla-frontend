import {HttpEvent, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {LoginService} from '../features/auth/services/login.service';
import {NO_ACCESS_TOKEN} from './http.context';
import {catchError, map, Observable, throwError} from 'rxjs';
import {ApiResponse, HttpError} from '../core/models/responses.interface';
import {LoadingService} from '../core/services/loading.service';
import {ToastService} from '../shared/features/services/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(LoginService).getToken();
  if (req.context.get(NO_ACCESS_TOKEN)) {
    return next(req).pipe(
      handleResponse()
    );
  }
  const newReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });
  return next(newReq).pipe(
    handleResponse()
  );
};

const handleResponse = <T>() => {
  let isLoading = inject(LoadingService);
  const toastService = inject(ToastService);
  return (source$: Observable<HttpEvent<any>>): Observable<HttpEvent<T>> =>
    source$.pipe(
      // Manejar casos de éxito con `success: false`
      map((event: HttpEvent<any>) => {
        // Verificar si es una respuesta completa con cuerpo (HttpResponse)
        if (event instanceof HttpResponse) {
          const body = event.body as ApiResponse<T>; // Tipar el cuerpo de la respuesta

          if (body && !body.success) {
            isLoading.stopLoading();
            const backendMessage = body.message || 'Ocurrió un error inesperado.';
            throw new Error(backendMessage); // Lanzar un error con el mensaje del backend
          }
        }
        return event as HttpEvent<T>; // Cast explícito ya tipado
      }),
      // Manejar errores HTTP (como 400, 500, etc.)
      catchError((err: HttpError) => {
        let errorMessage = 'Ocurrió un error inesperado.';

        // Si el backend devuelve un mensaje en el error, úsalo
        if (err.error?.message) {
          errorMessage = err.error.message;
        } else if (err.message) {
          errorMessage = err.message;
        }
        isLoading.stopLoading();
        // Mostrar alerta con el mensaje de error
        toastService.error(errorMessage);
        // Propagar el error para que pueda manejarse más tarde
        return throwError(() => new Error(errorMessage));
      })
    );
};
