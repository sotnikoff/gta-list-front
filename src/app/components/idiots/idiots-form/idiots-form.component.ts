import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IdiotService } from 'src/app/services/idiot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Idiot } from 'src/app/models/idiot';

@Component({
  selector: 'app-idiots-form',
  templateUrl: './idiots-form.component.html',
  styleUrls: ['./idiots-form.component.sass']
})
export class IdiotsFormComponent implements OnInit {

  @Input() idiot: Idiot;
  idiotForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private idiotService: IdiotService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.idiotForm = this.formBuilder.group({
      name: [this.idiot.name, Validators.required],
      momJoke: [this.idiot.momJoke],
      deathDate: [this.idiot.deathDate],
      agressive: [this.idiot.agressive],
      comment: [this.idiot.comment],
      autoKick: [this.idiot.autoKick],
      pazientDiagnos: [this.idiot.pazientDiagnos],
      rStarId: [this.idiot.rStarId, Validators.required],
      cheats: [this.idiot.cheats],
      warnMe: [this.idiot.warnMe],
      streamer: [this.idiot.streamer],
      freezePlayer: [this.idiot.freezePlayer],
      blame: [this.idiot.blame],
      explode: [this.idiot.explode]
    });
  }

  save(): void {
    if (!this.idiotForm.valid) {
      return;
    }

    const savedIdiot = new Idiot().fromJson(Object.assign({ id: this.idiot.id }, this.idiotForm.getRawValue()));
    this.idiotService.save(savedIdiot).subscribe(r => {
      this.router.navigateByUrl(`/idiots/${r.id}`);
    });
  }

}
