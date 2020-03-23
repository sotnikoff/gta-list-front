import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-proceed',
  templateUrl: './users-proceed.component.html',
  styleUrls: ['./users-proceed.component.sass']
})
export class UsersProceedComponent implements OnInit {

  form: FormGroup;
  user: User;
  loading = false;
  token: string;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private userService: UsersService) { }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.pipe(
      tap(r => {
        this.token = r.token;
      }),
      switchMap(r => {
        return this.userService.getUser(r.token);
      })
    ).subscribe(r => {
      this.user = r;
      this.loading = false;
      this.buildForm();
    });
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      token: [this.token],
      email: new FormControl({ value: this.user.email, disabled: true }, [Validators.required]),
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }

    const savedUser = new User().fromJson(Object.assign({}, this.form.getRawValue()));
    this.userService.proceed(savedUser).subscribe(r => {
       this.router.navigateByUrl('/sign_in');
    });
  }

}
