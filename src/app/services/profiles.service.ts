import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private readonly url = `${environment.baseUrl}/profiles`;
  constructor(private http: HttpClient) { }

  index(filter): Observable<Profile[]> {
    return this.http.get(this.url, { params: _.pickBy(filter, _.identity) }).pipe(
      map(r => (r as any).map(rr => new Profile().fromJson(rr)))
    );
  }

  show(id: number): Observable<Profile> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map(r => new Profile().fromJson(r))
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(record: Profile): Observable<Profile> {
    const profile = record.toSnakeCaseObject();
    if (record.id) {
      return this.http.put(`${this.url}/${record.id}`, { profile }).pipe(
        map(r => new Profile().fromJson(r))
      );
    }
    return this.http.post(this.url, { profile }).pipe(
      map(r => new Profile().fromJson(r))
    );
  }
}
