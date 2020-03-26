import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Profile } from 'src/app/models/profile';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-profiles-edit',
  templateUrl: './profiles-edit.component.html',
  styleUrls: ['./profiles-edit.component.sass']
})
export class ProfilesEditComponent implements OnInit, OnDestroy {

  profile: Profile;
  loading = false;
  destroySubject$$: Subject<any>;

  constructor(private service: ProfilesService,
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
      this.profile = r;
      this.titleService.setTitle(this.profile.name);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroySubject$$.next();
    this.destroySubject$$.complete();
  }

}
