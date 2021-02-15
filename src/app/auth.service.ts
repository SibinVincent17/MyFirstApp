
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  user = new BehaviorSubject(null);
  tokenExpiryTimer:number;

  signUp(email: string, password: string) {
    return this.http
      .post<authResponse>(
       'http://localhost:3000/signup',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        tap((event) => {
          const user = {
            idToken: event.idToken,
            email: event.email,
            refreshToken: event.email,
            expiry: new Date(new Date().getTime() + +event.expiresIn * 1000),
            localId: event.localId,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.user.next(user);
        })
      );
    }



  login(email: string, password: string) {
    return this.http
      .post<authResponse>(
        'http://localhost:3000/signin',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        tap((event) => {
          const user = {
            idToken: event.idToken,
            email: event.email,
            refreshToken: event.email,
            expiry: new Date(new Date().getTime() + +event.expiresIn * 1000),
            localId: event.localId,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.user.next(user);
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/authenticate']);
    localStorage.removeItem('user');
    if (this.tokenExpiryTimer) {
      clearTimeout(this.tokenExpiryTimer);
    }
    this.tokenExpiryTimer = null;
  }

  autoLogin() {}

  autoLogout() {}
}

