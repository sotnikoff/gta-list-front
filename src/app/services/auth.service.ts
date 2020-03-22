import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, map, catchError, switchMap, multicast, observeOn } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable, of, throwError, ReplaySubject, Subject, ConnectableObservable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = `${environment.baseUrl}/auth`;

  private user: User;
  private subject$$ = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) {}

  public signIn(nickname: string, password: string): Observable<any> {
    return this.http.post(this.url, {
      password,
      nickname
    }, { observe: 'response' }).pipe(
      tap(r => {
        this.setData(r);
        this.subject$$.next(this.user);
      }),
      map(r => new User().fromJson(r.body))
    );
  }

  public currentUser(): Observable<User> {
    return (this.subject$$.pipe(
      map(r => {
        if (!localStorage.getItem('accessToken')) {
          return 'no_auth';
        }
        if (this.isTokenExpired()) {
          return 'token_expired';
        }
        return r;
      }),
      switchMap(r => {
        if (r === 'no_auth' || r === 'token_expired') {
          return of(null);
        }
        if (r) {
          return of(r);
        }
        return this.validate();
      })
    ) as BehaviorSubject<User>).asObservable();
  }

  public isLoggedIn(): Observable<boolean> {
    return this.currentUser().pipe(
      catchError(r => {
        return of(null);
      }),
      map(r => r ? true : false)
    );
  }

  public signOut() {
    return this.http.delete(this.url)
      .pipe(
        tap(r => {
          this.removeData();
          this.subject$$.next(this.user);
        })
      );
  }

  private validate(): Observable<User> {
    return this.http.get(this.url)
      .pipe(
        map((r: HttpResponse<object>) => new User().fromJson(r)),
        tap(r => {
          this.user = r;
        })
      );
  }

  private isTokenExpired(): boolean {
    const expiredAt = localStorage.getItem('expiredAt');
    if (!expiredAt) {
      return true;
    }
    return (parseInt(expiredAt, 0) * 1000) < + new Date();
  }

  private removeData(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiredAt');
    localStorage.removeItem('userId');
    this.user = null;
  }

  private setData(response: HttpResponse<object>): void {
    localStorage.setItem('accessToken', response.headers.get('Authorization').replace('Bearer', '').trim());
    localStorage.setItem('expiredAt', response.headers.get('X-Expired-At'));
    localStorage.setItem('userId', response.headers.get('X-User-Id'));
    this.user = new User().fromJson(response.body);
  }
}
