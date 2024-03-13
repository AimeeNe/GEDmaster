import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getToken() && !httpRequest.url.endsWith('signin')) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${this.getToken()}`
        }
      });
    }

    return next.handle(httpRequest);
  }

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

}
