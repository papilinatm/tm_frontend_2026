import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SRV_URL } from './../app.config';

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;
    const token = localStorage.getItem('token');

    if (token && req.url.includes("/weatherforecast/summaries")) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }

    return next.handle(req.clone({
      headers,
      url: 
        req.url.startsWith('http://') || req.url.startsWith('https://') ? 
        req.url : `${SRV_URL}${req.url}`
    }));
  }
}
