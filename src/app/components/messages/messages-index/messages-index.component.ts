import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { IdiotService } from 'src/app/services/idiot.service';
import { forkJoin } from 'rxjs';
import { Idiot } from 'src/app/models/idiot';
import { User } from 'src/app/models/user';
import * as _ from 'lodash';

@Component({
  selector: 'app-messages-index',
  templateUrl: './messages-index.component.html',
  styleUrls: ['./messages-index.component.sass']
})
export class MessagesIndexComponent implements OnInit {

  filter = {
    idiot_id: null,
    user_id: null
  };

  messages: Message[];
  idiots: Idiot[];
  users: User[];

  constructor(private messagesService: MessagesService,
              private userService: UsersService,
              private idiotService: IdiotService,
              private route: ActivatedRoute) {
                this.messages = [];
                this.idiots = [];
                this.users = [];
              }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      tap(r => {
        this.filter.idiot_id = r.idiot_id;
        this.filter.user_id = r.user_id;
      }),
      switchMap(r => {
        return forkJoin([
          this.idiotService.index({ list_all: true }),
          this.userService.index({ accepted: true })
        ]);
      })
    ).subscribe(r => {
      this.idiots = r[0];
      this.users = r[1];

      if (!this.filter.user_id && this.users.length > 0) {
        this.filter.user_id = this.users[0].id;
      }
    });
  }

  foundIdiot(idiotId: number): Idiot {
    return _.find(this.idiots, ['id', idiotId]);
  }

  onIdiotChange(event) {
    this.filter.idiot_id = event.target.value;
  }

  onUserChange(event) {
    this.filter.user_id = event.target.value;
  }

  loadRecords(): void {
    this.messagesService.index(this.filter).subscribe(r => {
      this.messages = r;
    });
  }

}
