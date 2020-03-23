import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.sass']
})
export class UsersInviteComponent implements OnInit {

  form: FormGroup;
  user: User;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UsersService) {
    this.user = new User();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }

    const savedUser = new User().fromJson(Object.assign({}, this.form.getRawValue()));
    this.userService.invite(savedUser).subscribe(r => {
      this.router.navigateByUrl('/users');
    });
  }

}
