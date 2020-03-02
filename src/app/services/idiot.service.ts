import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Idiot } from '../models/idiot.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiotService {

  private readonly url = `${environment.baseUrl}/idiots`;

  constructor(private http: HttpClient) { }

  index(): Observable<Idiot[]> {
    return this.http.get(this.url, { observe: 'response' }).pipe(
      map(r => {
        return (r as any).body.map(rr => new Idiot().fromJson(rr));
      })
    );
  }

  show(id: number): Observable<Idiot> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map(r => new Idiot().fromJson(r))
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  restore(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}/restore`);
  }

  save(record: Idiot): Observable<Idiot> {
    const idiot = record.toSnakeCaseObject();
    if (record.id) {
      return this.http.put(`${this.url}/${record.id}`, { idiot }).pipe(
        map(r => new Idiot().fromJson(r))
      );
    }
    return this.http.post(this.url, { idiot }).pipe(
      map(r => new Idiot().fromJson(r))
    );
  }
}
