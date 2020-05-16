import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string;
  entries$: Observable<ScullyRoute[]>;
  defaultTitle: string = 'New Entry';
  defaultSummary: string = 'New Description';

  constructor(
    private entries: ScullyRoutesService
  ) {}

  ngOnInit() {

  }
}
