import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdiotService } from 'src/app/services/idiot.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Idiot } from 'src/app/models/idiot';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-idiots-show',
  templateUrl: './idiots-show.component.html',
  styleUrls: ['./idiots-show.component.sass']
})
export class IdiotsShowComponent implements OnInit, OnDestroy {

  idiot: Idiot;
  destroySubject$$: Subject<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private titleService: Title,
              private service: IdiotService) {
                this.destroySubject$$ = new Subject<any>();
              }

  ngOnInit(): void {
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

}
