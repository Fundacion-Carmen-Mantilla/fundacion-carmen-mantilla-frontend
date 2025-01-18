import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {authInterceptor} from './interceptors/auth.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {provideCloudinaryLoader} from '@angular/common';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(ReactiveFormsModule),
    provideCloudinaryLoader(`https://res.cloudinary.com/${environment.cloudinaryCloudName}`)
  ]
};
