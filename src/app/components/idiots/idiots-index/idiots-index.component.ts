import { Component, OnInit } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { Idiot } from 'src/app/models/idiot';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MdbCheckboxChange } from 'angular-bootstrap-md';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit {

  idiots: Idiot[];
  loading = false;

  filter = {
    attribute: 'name',
    direction: 'asc',
    drafts: false
  };

  constructor(private idiotService: IdiotService,
              private router: Router,
              private titleService: Title) {
    this.idiots = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle('Idiots');
    this.loadRecords();
  }

  draftsOnChange(event: MdbCheckboxChange) {
    this.filter.drafts = event.checked;
    this.loadRecords();
  }

  loadRecords(): void {
    this.loading = true;
    this.idiotService.index(this.filter).subscribe(r => {
      this.idiots = r;
      this.loading = false;
    });
  }

  openIdiot(row: Idiot): void {
    this.router.navigateByUrl('/idiots/' + row.id);
  }
}
