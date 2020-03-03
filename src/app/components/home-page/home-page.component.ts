import { Component, OnInit } from '@angular/core';
import { Idiot } from 'src/app/models/idiot.model';
import { IdiotService } from 'src/app/services/idiot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  idiots: Idiot[];
  constructor(private service: IdiotService, private router: Router) { }

  ngOnInit() {
    this.service.index().subscribe(r => {
      this.idiots = r;
    });
  }
  onRowClick(idiot: Idiot) {
    this.router.navigateByUrl(`/idiots/${idiot.id}`);
  }
}
