import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdiotService } from 'src/app/services/idiot.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Idiot } from 'src/app/models/idiot';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-idiots-show',
  templateUrl: './idiots-show.component.html',
  styleUrls: ['./idiots-show.component.sass']
})
export class IdiotsShowComponent implements OnInit, OnDestroy {

  idiot: Idiot;
  destroySubject$$: Subject<any>;
  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService,
              private titleService: Title,
              private service: IdiotService) {
                this.destroySubject$$ = new Subject<any>();
              }

  ngOnInit(): void {
    this.auth.currentUser().subscribe(r => {
      this.user = r;
    });

    this.route.params.pipe(
      switchMap(r => this.service.show(r.id)),
      takeUntil(this.destroySubject$$)
    ).subscribe(r => {
      this.idiot = r;
      this.titleService.setTitle(this.idiot.name);
    });
  }

  destroy(): void {
    this.service.delete(this.idiot.id).subscribe(r => {
      this.router.navigateByUrl('/');
    });
  }

  restore(): void {
    this.service.restore(this.idiot.id).subscribe(r => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnDestroy(): void {
    this.destroySubject$$.next();
    this.destroySubject$$.complete();
  }

  get location(): string {
    const arr = [];

    if (this.idiot.country) {
      arr.push(this.idiot.country);
    }

    if (this.idiot.region) {
      arr.push(this.idiot.region);
    }

    if (this.idiot.city) {
      arr.push(this.idiot.city);
    }

    if (this.idiot.latitude) {
      arr.push(`lat: ${this.idiot.latitude}`);
    }

    if (this.idiot.longitude) {
      arr.push(`lon: ${this.idiot.longitude}`);
    }

    return arr.join(', ');
  }

}
