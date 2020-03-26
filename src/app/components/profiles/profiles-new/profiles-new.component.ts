import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles-new',
  templateUrl: './profiles-new.component.html',
  styleUrls: ['./profiles-new.component.sass']
})
export class ProfilesNewComponent implements OnInit {

  profile: Profile;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.profile = new Profile();
    this.route.queryParams.subscribe(r => {
      if (r.name && r.r_star_id && r.idiot_id) {
        this.profile.name = r.name;
        this.profile.rStarId = r.r_star_id;
        this.profile.idiotId = r.idiot_id;
      }
    });
  }

}
