import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Idiot } from 'src/app/models/idiot';

@Component({
  selector: 'app-idiots-edit',
  templateUrl: './idiots-edit.component.html',
  styleUrls: ['./idiots-edit.component.sass']
})
export class IdiotsEditComponent implements OnInit, OnDestroy {

  idiot: Idiot;
  loading = false;
  destroySubject$$: Subject<any>;

  constructor(private service: IdiotService,
              private titleService: Title,
              private route: ActivatedRoute) {
                this.destroySubject$$ = new Subject<any>();
              }

  ngOnInit() {
    this.loading = true;
    this.route.params.pipe(
      switchMap(r => this.service.show(r.id)),
      takeUntil(this.destroySubject$$)
    ).subscribe(r => {
      this.idiot = r;
      this.titleService.setTitle(this.idiot.name);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroySubject$$.next();
    this.destroySubject$$.complete();
  }

}
