import { Component, OnInit } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { Idiot } from 'src/app/models/idiot.model';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit {

  idiots: Idiot[];
  loading = false;

  constructor(private idiotService: IdiotService,
              private router: Router,
              private titleService: Title) {
    this.idiots = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle('Idiots');
    this.loadRecords();
  }

  loadRecords(): void {
    this.loading = true;
    this.idiotService.index().subscribe(r => {
      this.idiots = r;
      this.loading = false;
    });
  }

  openIdiot(row: Idiot): void {
    this.router.navigateByUrl('/idiots/' + row.id);
  }
}
