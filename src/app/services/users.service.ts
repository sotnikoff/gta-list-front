import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = `${environment.baseUrl}`;
  constructor(private http: HttpClient) { }

  index(filter): Observable<User[]> {
    return this.http.get(`${this.url}/users`, { params: _.pickBy(filter, _.identity) }).pipe(
      map(r => (r as any).map(rr => new User().fromJson(rr)))
    );
  }

  invite(user: User): Observable<User> {
    return this.http.post(`${this.url}/auth/invitations`, user.toSnakeCaseObject()).pipe(
      map(r => new User().fromJson(r))
    );
  }

  proceed(user: User): Observable<User> {
    return this.http.put(`${this.url}/auth/invitations`, { user: user.toSnakeCaseObject() }).pipe(
      map(r => new User().fromJson(r))
    );
  }

  getUser(token: string): Observable<User> {
    const params = new HttpParams().set('token', token);
    return this.http.get(`${this.url}/auth/invitations`, { params }).pipe(
      map(r => new User().fromJson(r))
    );
  }
}
