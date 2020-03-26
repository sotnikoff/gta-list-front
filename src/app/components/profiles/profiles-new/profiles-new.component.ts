import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profiles-new',
  templateUrl: './profiles-new.component.html',
  styleUrls: ['./profiles-new.component.sass']
})
export class ProfilesNewComponent implements OnInit {

  profile: Profile;
  constructor() { }

  ngOnInit() {
    this.profile = new Profile();
  }

}
