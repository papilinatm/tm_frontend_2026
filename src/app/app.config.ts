import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http'
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { HTTPInterceptorService } from './services/http-interceptor.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptorsFromDi() 
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptorService,
      multi: true 
    },
    provideRouter(routes)
  ]
};

export const SRV_URL = environment.srvUrl;