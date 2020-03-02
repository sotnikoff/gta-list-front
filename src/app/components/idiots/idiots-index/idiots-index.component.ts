import { Component, OnInit } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { Idiot } from 'src/app/models/idiot.model';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as _ from 'lodash';

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
    direction: 'asc'
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

  sort(attribute: string): void {
    if (this.filter.attribute === attribute) {
      if (this.filter.direction === 'asc') {
        this.filter.direction = 'desc';
      } else {
        this.filter.direction = 'asc';
      }
    } else {
      this.filter.direction = 'asc';
      this.filter.attribute = attribute;
    }

    this.performSort();
  }

  performSort(): void {
    const idiots: Idiot[] = _.sortBy(this.idiots, o => o[this.filter.attribute]);
    if (this.filter.direction === 'asc') {
      this.idiots = idiots;
    } else {
      this.idiots = idiots.reverse();
    }
  }

  loadRecords(): void {
    this.loading = true;
    this.idiotService.index().subscribe(r => {
      this.idiots = r;
      this.performSort();
      this.loading = false;
    });
  }

  openIdiot(row: Idiot): void {
    this.router.navigateByUrl('/idiots/' + row.id);
  }
}
