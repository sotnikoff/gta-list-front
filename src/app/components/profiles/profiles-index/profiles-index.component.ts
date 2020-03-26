import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profiles-index',
  templateUrl: './profiles-index.component.html',
  styleUrls: ['./profiles-index.component.sass']
})
export class ProfilesIndexComponent implements OnInit {

  loading = false;
  profiles: Profile[];
  constructor(private service: ProfilesService) {
    this.profiles = [];
  }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.loading = true;
    this.service.index({}).subscribe(r => {
      this.profiles = r;
      this.loading = false;
    });
  }

  deleteProfile(profile: Profile): void {
    this.service.delete(profile.id).subscribe(r => {
      this.loadRecords();
    });
  }

}
