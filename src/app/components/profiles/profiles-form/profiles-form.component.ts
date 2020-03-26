import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import { ProfilesService } from 'src/app/services/profiles.service';


@Component({
  selector: 'app-profiles-form',
  templateUrl: './profiles-form.component.html',
  styleUrls: ['./profiles-form.component.sass']
})
export class ProfilesFormComponent implements OnInit {

  @Input() profile: Profile;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ProfilesService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: [this.profile.name, Validators.required],
      rStarId: [this.profile.rStarId, Validators.required],
      idiotId: [this.profile.idiotId]
    });
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }

    const savedProfile = new Profile().fromJson(Object.assign({ id: this.profile.id }, this.form.getRawValue()));
    this.service.save(savedProfile).subscribe(r => {
      this.router.navigateByUrl('/profiles');
    });
  }

}
