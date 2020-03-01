import { Component, OnInit } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { Idiot } from 'src/app/models/idiot.model';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit {

  idiots: Idiot[];
  constructor(private idiotService: IdiotService) {
    this.idiots = [];
  }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.idiotService.index().subscribe(r => {
      this.idiots = r;
    });
  }

}
