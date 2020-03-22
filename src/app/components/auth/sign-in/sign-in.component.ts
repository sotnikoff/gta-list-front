import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  authForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (!this.authForm.valid) {
      return;
    }

    this.authService.signIn(
      this.authForm.controls.nickname.value,
      this.authForm.controls.password.value
    ).subscribe(r => {
      this.router.navigateByUrl('/');
    });
  }

  buildForm(): void {
    this.authForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
