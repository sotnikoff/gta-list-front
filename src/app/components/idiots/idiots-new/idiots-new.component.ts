import { Component, OnInit } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';

@Component({
  selector: 'app-idiots-new',
  templateUrl: './idiots-new.component.html',
  styleUrls: ['./idiots-new.component.sass']
})
export class IdiotsNewComponent implements OnInit {

  idiot: Idiot;
  constructor() { }

  ngOnInit() {
    this.idiot = new Idiot();
  }

}
