import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.sass']
})
export class TopNavbarComponent implements OnInit {

  user: User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.auth.currentUser().subscribe(r => {
    //   this.user = r;
    // });
    // this.auth.isLoggedIn().pipe(
    //   switchMap(r => {
    //     if (r) {
    //       return this.auth.currentUser();
    //     }
    //     return of(null);
    //   })
    // ).subscribe(r => {
    //   this.user = r;
    // });
    // this.auth.getUser().subscribe(r => {
    //   this.user = r;
    //   console.log(r);
    // });
  }

}
