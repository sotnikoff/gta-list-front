import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private readonly url = `${environment.baseUrl}/mamken_schutkens`;
  constructor(private http: HttpClient) { }

  index(filter: any): Observable<Message[]> {
    return this.http.get(this.url, { params: _.pickBy(filter, _.identity) }).pipe(
      map(r => (r as any).map(rr => new Message().fromJson(rr)))
    );
  }
}
