import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {FileAsset} from "../models/File.model";
import {BehaviorSubject, Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from "@angular/common/http";
const helper = new JwtHelperService();
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn = new BehaviorSubject<any>('');
  isUserLoggedInObservable = this.isUserLoggedIn.asObservable();
  constructor(private http:HttpClient) { }

  login(credentials:{username:string,password:string}): Observable<any>{

    return this.http.post(`${baseUrl}dam/v1/auth/signin`,credentials,{observe: 'response'});
  }

  getTokenExpirationDate(token: string): Date {
    const expirationDate = helper.getTokenExpirationDate(token);

    if (expirationDate === undefined) return null;


    return expirationDate;
  }

  public isTokenExpired(): boolean {
    let token = this.loadToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    let isExpired = !(date.valueOf() > new Date().valueOf());
    if (isExpired) {
      localStorage.removeItem('token');

    }
    return isExpired;
  }
  loadToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    return token != null && !this.isTokenExpired();
  }
}
