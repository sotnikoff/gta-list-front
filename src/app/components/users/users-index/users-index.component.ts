import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.sass']
})
export class UsersIndexComponent implements OnInit {

  loading = false;
  users: User[];
  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(): void {
    this.loading = true;
    this.userService.index({}).subscribe(r => {
      this.users = r;
      this.loading = false;
    });
  }

}
